import { Controller, HttpStatus, Post,Request } from '@nestjs/common';
import { SocietiesService } from './societies.service';

@Controller('societies')
export class SocietiesController {
  constructor(private readonly societiesService: SocietiesService) {}


@Post('/getProducerList')
  async socitiesList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.societiesService.getproducerlist(req.body);
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
