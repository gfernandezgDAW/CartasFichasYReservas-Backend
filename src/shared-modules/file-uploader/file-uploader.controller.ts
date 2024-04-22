import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

import { IsAdminGuard } from '../../modules/auth/guards/is-admin.guard';

import { UploadedFileDto } from './dtos/uploadedFile.dto';
import { FileUploaderService } from './file-uploader.service';

@Controller('file-uploader')
export class FileUploaderController {
  constructor(private fileUploaderService: FileUploaderService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 5e6,
      },
    }),
  )
  @UseGuards(AuthGuard('jwt'), IsAdminGuard)
  async fileUpload(@UploadedFile() uploadedFile: UploadedFileDto) {
    return this.fileUploaderService.saveUploadedFile(
      uploadedFile.originalname,
      uploadedFile.buffer,
    );
  }
}
