import { Test, TestingModule } from '@nestjs/testing';
import { UserBioDataGateway } from './user-bio-data.gateway';
import { UserBioDataService } from './user-bio-data.service';

describe('UserBioDataGateway', () => {
  let gateway: UserBioDataGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBioDataGateway, UserBioDataService],
    }).compile();

    gateway = module.get<UserBioDataGateway>(UserBioDataGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
