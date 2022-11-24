import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExercisePlanService } from './exercise-plan.service';
import { CreateExercisePlanInput } from './dto/create-exercise-plan.input';
import { UpdateExercisePlanInput } from './dto/update-exercise-plan.input';

@Resolver('ExercisePlan')
export class ExercisePlanResolver {
  constructor(private readonly exercisePlanService: ExercisePlanService) {}

  @Mutation('createExercisePlan')
  create(@Args('createExercisePlanInput') createExercisePlanInput: CreateExercisePlanInput) {
    return this.exercisePlanService.create(createExercisePlanInput);
  }

  @Query('exercisePlan')
  findAll() {
    return this.exercisePlanService.findAll();
  }

  @Query('exercisePlan')
  findOne(@Args('id') id: number) {
    return this.exercisePlanService.findOne(id);
  }

  @Mutation('updateExercisePlan')
  update(@Args('updateExercisePlanInput') updateExercisePlanInput: UpdateExercisePlanInput) {
    return this.exercisePlanService.update(updateExercisePlanInput.id, updateExercisePlanInput);
  }

  @Mutation('removeExercisePlan')
  remove(@Args('id') id: number) {
    return this.exercisePlanService.remove(id);
  }
}
