import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMeAfterResolver } from './delete-me-after.resolver';
import { DeleteMeAfterService } from './delete-me-after.service';

describe('DeleteMeAfterResolver', () => {
  let resolver: DeleteMeAfterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteMeAfterResolver, DeleteMeAfterService],
    }).compile();

    resolver = module.get<DeleteMeAfterResolver>(DeleteMeAfterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
