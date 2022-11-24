import { Module } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealPlanResolver } from './meal-plan.resolver';

@Module({
  providers: [MealPlanResolver, MealPlanService]
})
export class MealPlanModule {}
