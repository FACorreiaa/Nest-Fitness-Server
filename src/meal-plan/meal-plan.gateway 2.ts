import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MealPlanService } from './meal-plan.service';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';

@WebSocketGateway()
export class MealPlanGateway {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @SubscribeMessage('createMealPlan')
  create(@MessageBody() createMealPlanDto: CreateMealPlanDto) {
    return this.mealPlanService.create(createMealPlanDto);
  }

  @SubscribeMessage('findAllMealPlan')
  findAll() {
    return this.mealPlanService.findAll();
  }

  @SubscribeMessage('findOneMealPlan')
  findOne(@MessageBody() id: number) {
    return this.mealPlanService.findOne(id);
  }

  @SubscribeMessage('updateMealPlan')
  update(@MessageBody() updateMealPlanDto: UpdateMealPlanDto) {
    return this.mealPlanService.update(updateMealPlanDto.id, updateMealPlanDto);
  }

  @SubscribeMessage('removeMealPlan')
  remove(@MessageBody() id: number) {
    return this.mealPlanService.remove(id);
  }
}
