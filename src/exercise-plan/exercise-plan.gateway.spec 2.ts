import { Test, TestingModule } from '@nestjs/testing';
import { ExercisePlanGateway } from './exercise-plan.gateway';
import { ExercisePlanService } from './exercise-plan.service';

describe('ExercisePlanGateway', () => {
  let gateway: ExercisePlanGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisePlanGateway, ExercisePlanService],
    }).compile();

    gateway = module.get<ExercisePlanGateway>(ExercisePlanGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
