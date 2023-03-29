import { HttpStatus, Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { recoveriesentryDto } from './dto/recoveriesentry.dto';

@Injectable()
export class RecoveriesentryService {
    constructor(private sharedService:SharedService){}

    
    async getproducerlist(req: recoveriesentryDto) {
        try {
          const data = await this.sharedService.executeQuery(
            `SELECT * from  RECOVERIES_ENTRY_FN where society_code=${req.society_code} AND bcc_code=${req.bcc_code} AND from_date=${req.from_date} `,
          );
          console.log(data)               
          if (data) {
            return {
              statusCode: HttpStatus.OK,
              Data: data.recordset,
              // Query: query,
            };
          }
          return {
            statusCode: HttpStatus.BAD_REQUEST,
            msg: 'Invalid Request',
          };
        } catch (error) {
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            Message: error,
          };
        }
      }
    
}
