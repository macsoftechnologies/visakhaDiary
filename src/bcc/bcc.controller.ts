import { Controller, HttpStatus, Post, Request } from '@nestjs/common';
import { BccService } from './bcc.service';

@Controller('bcc')
export class BccController {
  constructor(private readonly bccService: BccService) {}

  // @Post('/getBccByDistrictCode')
  // async createUser(@Request() req) {
  //   try {
  //     console.log(req.body);
  //     const result = await this.bccService.getBccs(req.body);
  //     console.log('result', result);
  //     return result;
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error.message,
  //     };
  //   }
  // }


  @Post('/getListSocities')
  async socitiesList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.bccService.getSocities(req.body);
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

