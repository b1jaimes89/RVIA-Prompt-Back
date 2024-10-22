import { IsString } from "class-validator";

export class BitoDto {

  @IsString()
  readonly prompt: string

}
