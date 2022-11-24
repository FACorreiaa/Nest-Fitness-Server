import { Controller } from '@nestjs/common';
import { ExercisePlanService } from './exercise-plan.service';
import { CreateExercisePlanDto } from './dto/create-exercise-plan.dto';
import { UpdateExercisePlanDto } from './dto/update-exercise-plan.dto';

@Controller()
export class ExercisePlanController {
  constructor(private readonly exercisePlanService: ExercisePlanService) {}
}
