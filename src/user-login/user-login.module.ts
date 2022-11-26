import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginResolver } from './user-login.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserLoginResolver, UserLoginService, PrismaService],
})
export class UserLoginModule {}
