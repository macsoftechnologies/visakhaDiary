import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}
  @Get('')
  async getProducerDetails(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.producerService.getProducers();
      console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
