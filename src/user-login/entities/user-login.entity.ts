import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserLogin {
  @Field((type) => Int)
  id: number;
  first_name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
  gender?: string;
}
