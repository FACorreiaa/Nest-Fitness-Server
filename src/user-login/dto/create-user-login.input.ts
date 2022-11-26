import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserLoginInput {
  first_name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
  gender: string;
}
