import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DeleteMeAfterService } from './delete-me-after.service';
import { CreateDeleteMeAfterDto } from './dto/create-delete-me-after.dto';
import { UpdateDeleteMeAfterDto } from './dto/update-delete-me-after.dto';

@WebSocketGateway()
export class DeleteMeAfterGateway {
  constructor(private readonly deleteMeAfterService: DeleteMeAfterService) {}

  @SubscribeMessage('createDeleteMeAfter')
  create(@MessageBody() createDeleteMeAfterDto: CreateDeleteMeAfterDto) {
    return this.deleteMeAfterService.create(createDeleteMeAfterDto);
  }

  @SubscribeMessage('findAllDeleteMeAfter')
  findAll() {
    return this.deleteMeAfterService.findAll();
  }

  @SubscribeMessage('findOneDeleteMeAfter')
  findOne(@MessageBody() id: number) {
    return this.deleteMeAfterService.findOne(id);
  }

  @SubscribeMessage('updateDeleteMeAfter')
  update(@MessageBody() updateDeleteMeAfterDto: UpdateDeleteMeAfterDto) {
    return this.deleteMeAfterService.update(updateDeleteMeAfterDto.id, updateDeleteMeAfterDto);
  }

  @SubscribeMessage('removeDeleteMeAfter')
  remove(@MessageBody() id: number) {
    return this.deleteMeAfterService.remove(id);
  }
}
