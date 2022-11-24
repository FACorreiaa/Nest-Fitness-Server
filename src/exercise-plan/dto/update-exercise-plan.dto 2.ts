import { PartialType } from '@nestjs/mapped-types';
import { CreateExercisePlanDto } from './create-exercise-plan.dto';

export class UpdateExercisePlanDto extends PartialType(CreateExercisePlanDto) {}
