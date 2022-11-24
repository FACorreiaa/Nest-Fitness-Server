import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DeleteMeAfter {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
