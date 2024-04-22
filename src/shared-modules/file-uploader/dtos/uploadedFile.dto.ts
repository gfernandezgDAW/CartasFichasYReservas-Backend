import { IsNumber, IsString } from 'class-validator';

export class UploadedFileDto {
  @IsString()
  fieldname: string;

  @IsString()
  originalname: string;

  @IsString()
  mimetype: string;

  @IsString()
  encoding: string;

  buffer: Buffer;

  @IsNumber()
  size: number;
}
