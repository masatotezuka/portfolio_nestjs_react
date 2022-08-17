import {
  Injectable,
  HttpException,
  HttpStatus,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Organization } from 'src/entity/organization.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto, VerifyPasswordDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { v4 as uuid } from 'uuid';
import { addHours } from 'date-fns';
import { SendgridEmitter } from 'src/sendgrid/sendgrid.emitter';
import { OnEvent } from '@nestjs/event-emitter';
import { ResetPassword } from 'src/sendgrid/mails/resetPassword.mail';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,

    private sendgrid: SendgridEmitter,
  ) {}

  async createAdmin(createAdminDto: CreateAdminDto) {
    const { firstName, lastName, email, password, organizationName } =
      createAdminDto;

    if (!firstName || !lastName || !email || !password || !organizationName) {
      throw new HttpException('invalid value', HttpStatus.BAD_REQUEST);
    }

    const result = await this.userRepository.findOne({
      select: { email: true },
      where: { email: email },
    });
    if (result) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = this.userRepository.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      isPasswordUpdated: true,
      role: 1,
    });
    const organization = this.organizationRepository.create({
      name: organizationName,
    });

    user.organization = organization;
    await this.organizationRepository.save(organization);
    await this.userRepository.save(user);

    return this.authService.login({ email, password });
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async createVerificationToken(email: string) {
    if (!email) {
      throw new HttpException('invalid value', HttpStatus.BAD_REQUEST);
    }

    const user = await this.findOne(email);

    if (!user) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND);
    }

    const verificationTokenExpiredAt = addHours(new Date(), 1);

    user.verificationToken = uuid();
    user.verificationTokenExpiredAt = verificationTokenExpiredAt;
    await this.userRepository.save(user);

    const verificationTokenUrl = `http://localhost:3000/password-reset/verification/${user.verificationToken}`;

    this.sendgrid.sendResetPassword(
      user.email,
      'tez.0731.mst@gmail.com',
      verificationTokenUrl,
    );
    return;
  }

  @OnEvent(ResetPassword.type)
  sendMail(msg: ResetPassword) {}

  async verifyPassword(verifyPasswordDto: VerifyPasswordDto) {
    const user = await this.userRepository.findOne({
      where: {
        verificationToken: verifyPasswordDto.token,
      },
    });
    if (!user) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND);
    }

    if (user.verificationTokenExpiredAt < new Date()) {
      throw new HttpException('not acceptable', HttpStatus.NOT_ACCEPTABLE);
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = bcrypt.hashSync(verifyPasswordDto.newPassword, salt);

    user.verificationToken = null;
    user.verificationTokenExpiredAt = null;
    user.password = hashPassword;
    await this.userRepository.save(user);
    return;
  }
}
