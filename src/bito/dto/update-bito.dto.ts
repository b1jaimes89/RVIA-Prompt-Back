import { PartialType } from '@nestjs/mapped-types';
import { CreateBitoDto } from './create-bito.dto';

export class UpdateBitoDto extends PartialType(CreateBitoDto) {}
