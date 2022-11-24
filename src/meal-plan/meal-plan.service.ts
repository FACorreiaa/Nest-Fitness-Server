import { Injectable } from '@nestjs/common';
import { CreateMealPlanInput } from './dto/create-meal-plan.input';
import { UpdateMealPlanInput } from './dto/update-meal-plan.input';

@Injectable()
export class MealPlanService {
  create(createMealPlanInput: CreateMealPlanInput) {
    return 'This action adds a new mealPlan';
  }

  findAll() {
    return `This action returns all mealPlan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealPlan`;
  }

  update(id: number, updateMealPlanInput: UpdateMealPlanInput) {
    return `This action updates a #${id} mealPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealPlan`;
  }
}
