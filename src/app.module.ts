import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
