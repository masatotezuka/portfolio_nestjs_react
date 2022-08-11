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
}
