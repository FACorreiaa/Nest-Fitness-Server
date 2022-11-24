import { Module } from '@nestjs/common';
import { DeleteMeAfterService } from './delete-me-after.service';
import { DeleteMeAfterResolver } from './delete-me-after.resolver';

@Module({
  providers: [DeleteMeAfterResolver, DeleteMeAfterService]
})
export class DeleteMeAfterModule {}
