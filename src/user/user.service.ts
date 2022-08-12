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
import { CreateAdminDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { v4 as uuid } from 'uuid';
import { format, addHours } from 'date-fns';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
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
    console.log(email);

    const user = await this.findOne(email);
    console.log(user);

    if (!user) {
      throw new HttpException('not found user', HttpStatus.NOT_FOUND);
    }

    const verificationTokenExpiredAt = addHours(new Date(), 1);

    const token = `${uuid()}-${format(
      verificationTokenExpiredAt,
      'yyyy-MM-dd',
    )}`;

    user.verificationToken = token;
    user.verificationTokenExpiredAt = verificationTokenExpiredAt;
    await this.userRepository.save(user);
    //メール送信
  }
}
