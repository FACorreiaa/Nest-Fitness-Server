import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileGateway } from './user-profile.gateway';
import { UserProfileService } from './user-profile.service';

describe('UserProfileGateway', () => {
  let gateway: UserProfileGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileGateway, UserProfileService],
    }).compile();

    gateway = module.get<UserProfileGateway>(UserProfileGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
