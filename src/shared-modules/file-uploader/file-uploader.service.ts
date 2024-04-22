import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as randomstring from 'randomstring';

export const uploadDirectory = `${process.cwd()}/public-files`;

@Injectable()
export class FileUploaderService {
  saveUploadedFile(filename: string, buffer: Buffer) {
    const dotPositionFilename = filename.lastIndexOf('.');
    if (
      dotPositionFilename === -1 ||
      dotPositionFilename === filename.length - 1
    ) {
      throw new BadRequestException('El archivo no tiene extensión');
    }

    const fileExtension = filename.substring(
      dotPositionFilename,
      filename.length,
    );
    const newFilename = `${this.generateRandomFilename()}${fileExtension}`;
    fs.writeFile(`${uploadDirectory}/${newFilename}`, buffer, (err) => {
      if (err) {
        throw err;
      }
    });

    return { updatedFilename: newFilename };
  }

  generateRandomFilename() {
    return randomstring.generate(30);
  }
}
