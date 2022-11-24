import { CreateUserBioDatumInput } from './create-user-bio-datum.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserBioDatumInput extends PartialType(CreateUserBioDatumInput) {
  id: number;
}
