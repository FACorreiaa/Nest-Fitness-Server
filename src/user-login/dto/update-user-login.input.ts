import { CreateUserLoginInput } from './create-user-login.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserLoginInput extends PartialType(CreateUserLoginInput) {
  @Field(() => Int)
  id: number;
  password: string;
}
