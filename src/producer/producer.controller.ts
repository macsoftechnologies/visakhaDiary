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
  @Post('')
  async getProducerDetails(@Request() req) {
    try {
      //console.log(req.body);
      const result = await this.producerService.getProducers(req.body);
      console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }

  @Post('/getProducerByPno')
  async socitiesList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.producerService.getproducerlist(req.body);
      //console.log('result', result);

      return result;
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
