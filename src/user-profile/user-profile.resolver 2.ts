import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileInput } from './dto/create-user-profile.input';
import { UpdateUserProfileInput } from './dto/update-user-profile.input';

@Resolver('UserProfile')
export class UserProfileResolver {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Mutation('createUserProfile')
  create(@Args('createUserProfileInput') createUserProfileInput: CreateUserProfileInput) {
    return this.userProfileService.create(createUserProfileInput);
  }

  @Query('userProfile')
  findAll() {
    return this.userProfileService.findAll();
  }

  @Query('userProfile')
  findOne(@Args('id') id: number) {
    return this.userProfileService.findOne(id);
  }

  @Mutation('updateUserProfile')
  update(@Args('updateUserProfileInput') updateUserProfileInput: UpdateUserProfileInput) {
    return this.userProfileService.update(updateUserProfileInput.id, updateUserProfileInput);
  }

  @Mutation('removeUserProfile')
  remove(@Args('id') id: number) {
    return this.userProfileService.remove(id);
  }
}
