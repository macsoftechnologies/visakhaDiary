import { HttpStatus, Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { societiesDto } from './dto/societies.dto';

@Injectable()
export class SocietiesService {
  
    constructor(private sharedService:SharedService){}
    
 

    async getproducerlist(req: societiesDto) {
        try {
          const data = await this.sharedService.executeQuery(
            `SELECT * from producers where society_code=${req.society_code} AND bcc_code=${req.bcc_code}`,
          ); 
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
