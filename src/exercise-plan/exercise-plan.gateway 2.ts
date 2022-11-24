import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ExercisePlanService } from './exercise-plan.service';
import { CreateExercisePlanDto } from './dto/create-exercise-plan.dto';
import { UpdateExercisePlanDto } from './dto/update-exercise-plan.dto';

@WebSocketGateway()
export class ExercisePlanGateway {
  constructor(private readonly exercisePlanService: ExercisePlanService) {}

  @SubscribeMessage('createExercisePlan')
  create(@MessageBody() createExercisePlanDto: CreateExercisePlanDto) {
    return this.exercisePlanService.create(createExercisePlanDto);
  }

  @SubscribeMessage('findAllExercisePlan')
  findAll() {
    return this.exercisePlanService.findAll();
  }

  @SubscribeMessage('findOneExercisePlan')
  findOne(@MessageBody() id: number) {
    return this.exercisePlanService.findOne(id);
  }

  @SubscribeMessage('updateExercisePlan')
  update(@MessageBody() updateExercisePlanDto: UpdateExercisePlanDto) {
    return this.exercisePlanService.update(updateExercisePlanDto.id, updateExercisePlanDto);
  }

  @SubscribeMessage('removeExercisePlan')
  remove(@MessageBody() id: number) {
    return this.exercisePlanService.remove(id);
  }
}
