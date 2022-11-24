import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@WebSocketGateway()
export class UserProfileGateway {
  constructor(private readonly userProfileService: UserProfileService) {}

  @SubscribeMessage('createUserProfile')
  create(@MessageBody() createUserProfileDto: CreateUserProfileDto) {
    return this.userProfileService.create(createUserProfileDto);
  }

  @SubscribeMessage('findAllUserProfile')
  findAll() {
    return this.userProfileService.findAll();
  }

  @SubscribeMessage('findOneUserProfile')
  findOne(@MessageBody() id: number) {
    return this.userProfileService.findOne(id);
  }

  @SubscribeMessage('updateUserProfile')
  update(@MessageBody() updateUserProfileDto: UpdateUserProfileDto) {
    return this.userProfileService.update(updateUserProfileDto.id, updateUserProfileDto);
  }

  @SubscribeMessage('removeUserProfile')
  remove(@MessageBody() id: number) {
    return this.userProfileService.remove(id);
  }
}
