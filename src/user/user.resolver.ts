import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, NewUser, UpdateUser } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Post')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async posts(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query('user')
  async post(@Args('id') args: string): Promise<User> {
    return this.userService.findOne(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser): Promise<User> {
    const createdPost = await this.userService.create(args);
    pubSub.publish('postCreated', { postCreated: createdPost });
    return createdPost;
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser): Promise<User> {
    return this.userService.update(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: number): Promise<User> {
    return this.userService.delete(args);
  }

  @Subscription('userCreated')
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
}
