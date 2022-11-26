import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginResolver } from './user-login.resolver';
import { UserLoginService } from './user-login.service';

describe('UserLoginResolver', () => {
  let resolver: UserLoginResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLoginResolver, UserLoginService],
    }).compile();

    resolver = module.get<UserLoginResolver>(UserLoginResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
