import { CreateDeleteMeAfterInput } from './create-delete-me-after.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeleteMeAfterInput extends PartialType(CreateDeleteMeAfterInput) {
  @Field(() => Int)
  id: number;
}
