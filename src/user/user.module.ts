import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [ConfigModule],
  providers: [UserService, ConfigService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
