import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { UserBioDataService } from './user-bio-data.service';
import { CreateUserBioDatumDto } from './dto/create-user-bio-datum.dto';
import { UpdateUserBioDatumDto } from './dto/update-user-bio-datum.dto';

@WebSocketGateway()
export class UserBioDataGateway {
  constructor(private readonly userBioDataService: UserBioDataService) {}

  @SubscribeMessage('createUserBioDatum')
  create(@MessageBody() createUserBioDatumDto: CreateUserBioDatumDto) {
    return this.userBioDataService.create(createUserBioDatumDto);
  }

  @SubscribeMessage('findAllUserBioData')
  findAll() {
    return this.userBioDataService.findAll();
  }

  @SubscribeMessage('findOneUserBioDatum')
  findOne(@MessageBody() id: number) {
    return this.userBioDataService.findOne(id);
  }

  @SubscribeMessage('updateUserBioDatum')
  update(@MessageBody() updateUserBioDatumDto: UpdateUserBioDatumDto) {
    return this.userBioDataService.update(updateUserBioDatumDto.id, updateUserBioDatumDto);
  }

  @SubscribeMessage('removeUserBioDatum')
  remove(@MessageBody() id: number) {
    return this.userBioDataService.remove(id);
  }
}
