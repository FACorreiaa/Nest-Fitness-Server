import { Test, TestingModule } from '@nestjs/testing';
import { ExercisePlanResolver } from './exercise-plan.resolver';
import { ExercisePlanService } from './exercise-plan.service';

describe('ExercisePlanResolver', () => {
  let resolver: ExercisePlanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisePlanResolver, ExercisePlanService],
    }).compile();

    resolver = module.get<ExercisePlanResolver>(ExercisePlanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
