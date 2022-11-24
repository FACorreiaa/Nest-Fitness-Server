import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MealPlanService } from './meal-plan.service';
import { CreateMealPlanInput } from './dto/create-meal-plan.input';
import { UpdateMealPlanInput } from './dto/update-meal-plan.input';

@Resolver('MealPlan')
export class MealPlanResolver {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Mutation('createMealPlan')
  create(@Args('createMealPlanInput') createMealPlanInput: CreateMealPlanInput) {
    return this.mealPlanService.create(createMealPlanInput);
  }

  @Query('mealPlan')
  findAll() {
    return this.mealPlanService.findAll();
  }

  @Query('mealPlan')
  findOne(@Args('id') id: number) {
    return this.mealPlanService.findOne(id);
  }

  @Mutation('updateMealPlan')
  update(@Args('updateMealPlanInput') updateMealPlanInput: UpdateMealPlanInput) {
    return this.mealPlanService.update(updateMealPlanInput.id, updateMealPlanInput);
  }

  @Mutation('removeMealPlan')
  remove(@Args('id') id: number) {
    return this.mealPlanService.remove(id);
  }
}
