import { Module } from '@nestjs/common';
import { UserBioDataService } from './user-bio-data.service';
import { UserBioDataResolver } from './user-bio-data.resolver';

@Module({
  providers: [UserBioDataResolver, UserBioDataService]
})
export class UserBioDataModule {}
