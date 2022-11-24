import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBioDatumDto } from './create-user-bio-datum.dto';

export class UpdateUserBioDatumDto extends PartialType(CreateUserBioDatumDto) {}
