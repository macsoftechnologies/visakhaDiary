import { HttpStatus, Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { cattleinformationDto } from './dto/cattleinformation.dto';

@Injectable()
export class CattleinformationService {
    constructor( private sharedService:SharedService ){}


    async getCattleInformation(req: cattleinformationDto) {
        try {
          const data = await this.sharedService.executeQuery(
            `SELECT * from Cattle_Information where producer_no=${req.producer_no} AND bcc_code=${req.bcc_code} AND society_code=${req.society_code}`,
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
