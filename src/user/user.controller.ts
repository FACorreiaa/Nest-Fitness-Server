import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { UserType } from 'src/models/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('api/v1/users/show-users')
  async getPublishedPosts(): Promise<UserModel[]> {
    return this.userService.getAllusers({
      //where: { published: true },
    });
  }

  @Put('api/v1/user/:id/login/change-password')
  async changePassword(
    @Param('id') id: string,
    @Body() user: UserType,
  ): Promise<UserModel> {
    const { password } = user;
    return this.userService.updatePassword({
      where: { id: Number(id) },
      data: { password: password },
    });
  }

  @Post('api/v1/user/login/create-user')
  async createUser(
    @Body()
    user: UserType,
  ): Promise<UserModel> {
    console.log('user', user);
    return this.userService.createUser(user);
  }
}
