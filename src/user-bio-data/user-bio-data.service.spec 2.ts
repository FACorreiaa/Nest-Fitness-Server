import { Test, TestingModule } from '@nestjs/testing';
import { UserBioDataService } from './user-bio-data.service';

describe('UserBioDataService', () => {
  let service: UserBioDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBioDataService],
    }).compile();

    service = module.get<UserBioDataService>(UserBioDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
