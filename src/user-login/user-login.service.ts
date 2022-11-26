import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserLoginInput } from './dto/create-user-login.input';
import { UpdateUserLoginInput } from './dto/update-user-login.input';

@Injectable()
export class UserLoginService {
  constructor(private prisma: PrismaService) {}
  async create(createUserLoginInput: CreateUserLoginInput) {
    //data: {title: {createUserLoginInput.title}}
    return await this.prisma.user.create({
      data: createUserLoginInput,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserLoginInput: UpdateUserLoginInput) {
    const { ...params } = updateUserLoginInput;

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...params,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
