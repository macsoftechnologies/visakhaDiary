import { Controller, HttpStatus, Post,Request} from '@nestjs/common';
import { CattleinformationService } from './cattleinformation.service';

@Controller('cattleinformation')
export class CattleinformationController {
  constructor(private readonly cattleinformationService: CattleinformationService) {}


  @Post('/getcattleInformationByPno')
  async cattleInformationList(@Request() req) {
    try {
      console.log(req.body);
      const result = await this.cattleinformationService.getCattleInformation(req.body);
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
