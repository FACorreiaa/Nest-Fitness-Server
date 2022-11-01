import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [UserService, ConfigService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
