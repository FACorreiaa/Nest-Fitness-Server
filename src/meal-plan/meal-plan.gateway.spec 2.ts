import { Test, TestingModule } from '@nestjs/testing';
import { MealPlanGateway } from './meal-plan.gateway';
import { MealPlanService } from './meal-plan.service';

describe('MealPlanGateway', () => {
  let gateway: MealPlanGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealPlanGateway, MealPlanService],
    }).compile();

    gateway = module.get<MealPlanGateway>(MealPlanGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
