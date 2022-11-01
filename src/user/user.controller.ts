import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('api/v1/user/show-users')
  async getPublishedPosts(): Promise<UserModel[]> {
    return this.userService.getAllusers({
      //where: { published: true },
    });
  }

  @Post('api/v1/user/create-user')
  async createUser(
    @Body()
    userData: {
      first_name?: string;
      last_name?: string;
      nickname: string;
      email: string;
      password: string;
      gender: string;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
