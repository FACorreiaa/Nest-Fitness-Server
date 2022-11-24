import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeleteMeAfterService } from './delete-me-after.service';
import { DeleteMeAfter } from './entities/delete-me-after.entity';
import { CreateDeleteMeAfterInput } from './dto/create-delete-me-after.input';
import { UpdateDeleteMeAfterInput } from './dto/update-delete-me-after.input';

@Resolver(() => DeleteMeAfter)
export class DeleteMeAfterResolver {
  constructor(private readonly deleteMeAfterService: DeleteMeAfterService) {}

  @Mutation(() => DeleteMeAfter)
  createDeleteMeAfter(@Args('createDeleteMeAfterInput') createDeleteMeAfterInput: CreateDeleteMeAfterInput) {
    return this.deleteMeAfterService.create(createDeleteMeAfterInput);
  }

  @Query(() => [DeleteMeAfter], { name: 'deleteMeAfter' })
  findAll() {
    return this.deleteMeAfterService.findAll();
  }

  @Query(() => DeleteMeAfter, { name: 'deleteMeAfter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.deleteMeAfterService.findOne(id);
  }

  @Mutation(() => DeleteMeAfter)
  updateDeleteMeAfter(@Args('updateDeleteMeAfterInput') updateDeleteMeAfterInput: UpdateDeleteMeAfterInput) {
    return this.deleteMeAfterService.update(updateDeleteMeAfterInput.id, updateDeleteMeAfterInput);
  }

  @Mutation(() => DeleteMeAfter)
  removeDeleteMeAfter(@Args('id', { type: () => Int }) id: number) {
    return this.deleteMeAfterService.remove(id);
  }
}
