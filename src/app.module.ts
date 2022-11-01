import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserLoginService } from './user-login/user-login.service';
import { UserLoginController } from './user-login/user-login.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, UserLoginController],
  providers: [AppService, UserService, UserLoginService],
})
export class AppModule {}
