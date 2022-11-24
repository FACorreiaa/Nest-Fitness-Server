import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMeAfterGateway } from './delete-me-after.gateway';
import { DeleteMeAfterService } from './delete-me-after.service';

describe('DeleteMeAfterGateway', () => {
  let gateway: DeleteMeAfterGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteMeAfterGateway, DeleteMeAfterService],
    }).compile();

    gateway = module.get<DeleteMeAfterGateway>(DeleteMeAfterGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
