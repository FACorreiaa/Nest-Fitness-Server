import { Injectable } from '@nestjs/common';
import { CreateDeleteMeAfterInput } from './dto/create-delete-me-after.input';
import { UpdateDeleteMeAfterInput } from './dto/update-delete-me-after.input';

@Injectable()
export class DeleteMeAfterService {
  create(createDeleteMeAfterInput: CreateDeleteMeAfterInput) {
    return 'This action adds a new deleteMeAfter';
  }

  findAll() {
    return `This action returns all deleteMeAfter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deleteMeAfter`;
  }

  update(id: number, updateDeleteMeAfterInput: UpdateDeleteMeAfterInput) {
    return `This action updates a #${id} deleteMeAfter`;
  }

  remove(id: number) {
    return `This action removes a #${id} deleteMeAfter`;
  }
}
