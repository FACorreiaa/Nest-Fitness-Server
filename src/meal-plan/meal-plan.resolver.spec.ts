import { Test, TestingModule } from '@nestjs/testing';
import { MealPlanResolver } from './meal-plan.resolver';
import { MealPlanService } from './meal-plan.service';

describe('MealPlanResolver', () => {
  let resolver: MealPlanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPlanResolver, MealPlanService],
    }).compile();

    resolver = module.get<MealPlanResolver>(MealPlanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
