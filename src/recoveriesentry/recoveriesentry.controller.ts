import { Controller, HttpStatus, Post, Request} from '@nestjs/common';
import { RecoveriesentryService } from './recoveriesentry.service';

@Controller('recoveriesentry')
export class RecoveriesentryController {
  constructor(private readonly recoveriesentryService: RecoveriesentryService) {}


  @Post('/getProducerList')
  async socitiesList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.recoveriesentryService.getproducerlist(req.body);
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
