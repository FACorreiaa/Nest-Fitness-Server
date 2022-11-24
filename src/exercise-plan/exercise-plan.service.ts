import { Injectable } from '@nestjs/common';
import { CreateExercisePlanInput } from './dto/create-exercise-plan.input';
import { UpdateExercisePlanInput } from './dto/update-exercise-plan.input';

@Injectable()
export class ExercisePlanService {
  create(createExercisePlanInput: CreateExercisePlanInput) {
    return 'This action adds a new exercisePlan';
  }

  findAll() {
    return `This action returns all exercisePlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercisePlan`;
  }

  update(id: number, updateExercisePlanInput: UpdateExercisePlanInput) {
    return `This action updates a #${id} exercisePlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercisePlan`;
  }
}
