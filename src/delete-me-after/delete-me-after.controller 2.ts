import { Controller } from '@nestjs/common';
import { DeleteMeAfterService } from './delete-me-after.service';
import { CreateDeleteMeAfterDto } from './dto/create-delete-me-after.dto';
import { UpdateDeleteMeAfterDto } from './dto/update-delete-me-after.dto';

@Controller()
export class DeleteMeAfterController {
  constructor(private readonly deleteMeAfterService: DeleteMeAfterService) {}
}
