import { CreateMealPlanInput } from './create-meal-plan.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMealPlanInput extends PartialType(CreateMealPlanInput) {
  id: number;
}
