import { Injectable } from '@nestjs/common';
import { CreateUserBioDatumInput } from './dto/create-user-bio-datum.input';
import { UpdateUserBioDatumInput } from './dto/update-user-bio-datum.input';

@Injectable()
export class UserBioDataService {
  create(createUserBioDatumInput: CreateUserBioDatumInput) {
    return 'This action adds a new userBioDatum';
  }

  findAll() {
    return `This action returns all userBioData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBioDatum`;
  }

  update(id: number, updateUserBioDatumInput: UpdateUserBioDatumInput) {
    return `This action updates a #${id} userBioDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBioDatum`;
  }
}
