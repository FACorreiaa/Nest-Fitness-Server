import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMeAfterService } from './delete-me-after.service';

describe('DeleteMeAfterService', () => {
  let service: DeleteMeAfterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteMeAfterService],
    }).compile();

    service = module.get<DeleteMeAfterService>(DeleteMeAfterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
