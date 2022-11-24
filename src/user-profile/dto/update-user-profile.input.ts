import { CreateUserProfileInput } from './create-user-profile.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserProfileInput extends PartialType(CreateUserProfileInput) {
  id: number;
}
