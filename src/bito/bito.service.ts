import { Injectable } from '@nestjs/common';
import { BitoDto } from './dto';
import { exec } from 'child_process';

@Injectable()
export class BitoService {

  async useBito(bitoDto: BitoDto){
    // console.log(bitoDto); //<- objeto { prompt: '' }
    const dataSuscription = 'En la respuesta incluye al inicio el modelo y mi tipo de suscripcion (basic o advanced) que estas usando para responder';
    const command = `echo ${bitoDto.prompt} ${dataSuscription} | bito`; //<- pasando el prompt directamente [windows]
    return await this.execBitoCLI(command);
  }

  async useBitoFile(promptPath: string, filePath: string){
    const command = `bito -p ${promptPath} -f ${filePath}`;
    return await this.execBitoCLI(command);
  }

  async execBitoCLI(commando: string){
    return new Promise((resolve, reject) => {
      exec(commando, (error, stdout, stderr) => {
        if (error) {
          return reject(`Error: ${stderr}`);
        }
        resolve({
          response: stdout
        });
      });
    });
  }
}
