import { Test, TestingModule } from '@nestjs/testing';
import { ExercisePlanController } from './exercise-plan.controller';
import { ExercisePlanService } from './exercise-plan.service';

describe('ExercisePlanController', () => {
  let controller: ExercisePlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisePlanController],
      providers: [ExercisePlanService],
    }).compile();

    controller = module.get<ExercisePlanController>(ExercisePlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
