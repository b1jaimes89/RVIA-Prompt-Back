import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BitoService } from './bito.service';
import { BitoDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { diskStorage } from 'multer';

@Controller('bito')
export class BitoController {
  
  constructor(private readonly bitoService: BitoService) {}

  @Post('base')
  create(@Body() bitoDto: BitoDto) {
    return this.bitoService.useBito(bitoDto);
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: (req,file,cb) => {
        const uploadPath = path.join(__dirname, '..','..','prompts');
        if(!fs.existsSync(uploadPath)){
          fs.mkdirSync(uploadPath, { recursive: true })
        }
        cb(null,uploadPath);
      },
      filename: (req,file,cb) => {
        cb(null,file.originalname);
      }
    })
  }))
  async test(@Body() prompt: BitoDto, @UploadedFile() file: Express.Multer.File){
    const txtFilePath = path.join(__dirname,'..','..','prompts','promt.txt');
    fs.writeFileSync(txtFilePath,prompt.prompt);
    
    try {
      const response = await this.bitoService.useBitoFile(txtFilePath, file.path); 
      fs.unlinkSync(file.path);
      fs.unlinkSync(txtFilePath);

      return response;
    } catch (error) {
      throw new Error(`Error procesando el archivo: ${error.message}`);
    }
  }
}
