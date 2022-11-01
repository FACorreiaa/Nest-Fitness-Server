import { Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //create new user
  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      data,
    });
  }

  //change password
  async updatePassword(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserModel> {
    const { data, where } = params;
    console.log('data', data);
    console.log('where', where);
    return this.prisma.user.update({
      data,
      where,
    });
  }

  //list all users
  async getAllusers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<UserModel[]> {
    const { skip, take, cursor, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      orderBy,
    });
  }
}
