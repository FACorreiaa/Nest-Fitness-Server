import { PartialType } from '@nestjs/mapped-types';
import { CreateDeleteMeAfterDto } from './create-delete-me-after.dto';

export class UpdateDeleteMeAfterDto extends PartialType(CreateDeleteMeAfterDto) {}
