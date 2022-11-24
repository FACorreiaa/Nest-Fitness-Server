import { Controller } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';

@Controller()
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}
}
