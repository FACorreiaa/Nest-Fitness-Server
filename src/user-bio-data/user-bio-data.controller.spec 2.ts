import { Test, TestingModule } from '@nestjs/testing';
import { UserBioDataController } from './user-bio-data.controller';
import { UserBioDataService } from './user-bio-data.service';

describe('UserBioDataController', () => {
  let controller: UserBioDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBioDataController],
      providers: [UserBioDataService],
    }).compile();

    controller = module.get<UserBioDataController>(UserBioDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
