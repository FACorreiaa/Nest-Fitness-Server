import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserLoginService } from './user-login.service';
import { UserLogin } from './entities/user-login.entity';
import { CreateUserLoginInput } from './dto/create-user-login.input';
import { UpdateUserLoginInput } from './dto/update-user-login.input';

@Resolver(() => UserLogin)
export class UserLoginResolver {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Mutation(() => UserLogin)
  createUserLogin(
    @Args('createUserLoginInput') createUserLoginInput: CreateUserLoginInput,
  ) {
    return this.userLoginService.create(createUserLoginInput);
  }

  @Query(() => [UserLogin], { name: 'usersLogin' })
  findAll() {
    return this.userLoginService.findAll();
  }

  @Query(() => UserLogin, { name: 'userLogin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userLoginService.findOne(id);
  }

  @Mutation(() => UserLogin)
  updateUserLogin(
    @Args('updateUserLoginInput') updateUserLoginInput: UpdateUserLoginInput,
  ) {
    return this.userLoginService.update(
      updateUserLoginInput.id,
      updateUserLoginInput,
    );
  }

  @Mutation(() => UserLogin)
  removeUserLogin(@Args('id', { type: () => Int }) id: number) {
    return this.userLoginService.remove(id);
  }
}
