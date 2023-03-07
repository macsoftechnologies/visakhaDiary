import { Controller } from '@nestjs/common';
import { SupervisorsService } from './supervisors.service';

@Controller('supervisors')
export class SupervisorsController {
  constructor(private readonly supervisorsService: SupervisorsService) {}
}
