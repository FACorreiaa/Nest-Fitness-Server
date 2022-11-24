import { CreateExercisePlanInput } from './create-exercise-plan.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExercisePlanInput extends PartialType(CreateExercisePlanInput) {
  id: number;
}
