import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserBioDataService } from './user-bio-data.service';
import { CreateUserBioDatumInput } from './dto/create-user-bio-datum.input';
import { UpdateUserBioDatumInput } from './dto/update-user-bio-datum.input';

@Resolver('UserBioDatum')
export class UserBioDataResolver {
  constructor(private readonly userBioDataService: UserBioDataService) {}

  @Mutation('createUserBioDatum')
  create(@Args('createUserBioDatumInput') createUserBioDatumInput: CreateUserBioDatumInput) {
    return this.userBioDataService.create(createUserBioDatumInput);
  }

  @Query('userBioData')
  findAll() {
    return this.userBioDataService.findAll();
  }

  @Query('userBioDatum')
  findOne(@Args('id') id: number) {
    return this.userBioDataService.findOne(id);
  }

  @Mutation('updateUserBioDatum')
  update(@Args('updateUserBioDatumInput') updateUserBioDatumInput: UpdateUserBioDatumInput) {
    return this.userBioDataService.update(updateUserBioDatumInput.id, updateUserBioDatumInput);
  }

  @Mutation('removeUserBioDatum')
  remove(@Args('id') id: number) {
    return this.userBioDataService.remove(id);
  }
}
