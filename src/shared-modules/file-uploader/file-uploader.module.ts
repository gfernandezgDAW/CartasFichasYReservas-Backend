import { Module } from '@nestjs/common';

import { SharedModule } from '../../common/shared.module';

import { FileUploaderController } from './file-uploader.controller';
import { FileUploaderService } from './file-uploader.service';

@Module({
  imports: [SharedModule],
  controllers: [FileUploaderController],
  providers: [FileUploaderService],
  exports: [FileUploaderService],
})
export class FileUploaderModule {}
