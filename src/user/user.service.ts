import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from 'src/entity/organization.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
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

    const hashPassword = bcrypt.hashSync(password, 10);

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
  }
}
