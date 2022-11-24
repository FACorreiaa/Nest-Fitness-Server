import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMeAfterController } from './delete-me-after.controller';
import { DeleteMeAfterService } from './delete-me-after.service';

describe('DeleteMeAfterController', () => {
  let controller: DeleteMeAfterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteMeAfterController],
      providers: [DeleteMeAfterService],
    }).compile();

    controller = module.get<DeleteMeAfterController>(DeleteMeAfterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
