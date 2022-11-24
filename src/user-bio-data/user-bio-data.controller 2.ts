import { Controller } from '@nestjs/common';
import { UserBioDataService } from './user-bio-data.service';
import { CreateUserBioDatumDto } from './dto/create-user-bio-datum.dto';
import { UpdateUserBioDatumDto } from './dto/update-user-bio-datum.dto';

@Controller()
export class UserBioDataController {
  constructor(private readonly userBioDataService: UserBioDataService) {}
}
