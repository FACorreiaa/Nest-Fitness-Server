import { Controller } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

@Controller()
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}
}
