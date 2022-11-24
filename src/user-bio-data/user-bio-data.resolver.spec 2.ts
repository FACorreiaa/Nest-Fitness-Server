import { Test, TestingModule } from '@nestjs/testing';
import { UserBioDataResolver } from './user-bio-data.resolver';
import { UserBioDataService } from './user-bio-data.service';

describe('UserBioDataResolver', () => {
  let resolver: UserBioDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBioDataResolver, UserBioDataService],
    }).compile();

    resolver = module.get<UserBioDataResolver>(UserBioDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
