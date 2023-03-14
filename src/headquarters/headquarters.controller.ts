import { Controller } from '@nestjs/common';
import { HeadquartersService } from './headquarters.service';

@Controller('headquarters')
export class HeadquartersController {
  constructor(private readonly headquartersService: HeadquartersService) {}
}
