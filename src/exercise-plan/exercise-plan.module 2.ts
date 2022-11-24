import { Module } from '@nestjs/common';
import { ExercisePlanService } from './exercise-plan.service';
import { ExercisePlanResolver } from './exercise-plan.resolver';

@Module({
  providers: [ExercisePlanResolver, ExercisePlanService]
})
export class ExercisePlanModule {}
