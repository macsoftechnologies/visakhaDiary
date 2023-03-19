import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared.service';
import { Repository, getRepository } from 'typeorm';
import { bccDto } from './dto/bcc.dto';
import { BCC } from './entities/bcc.entity';

@Injectable()
export class BccService {
  constructor(@InjectRepository(BCC) private bccRepository: Repository<BCC>,private sharedService: SharedService) {}
  async getBccs(req: bccDto) {
    try {
      console.log(req, 'req..');
      const addUserResp = await getRepository(BCC)
        .createQueryBuilder('BCC')
        .where({ district_code: parseInt(req.district_code) })
        .getMany();
      console.log(addUserResp, '...................................Resp');

      if (addUserResp) {
        return {
          statusCode: HttpStatus.OK,
          Data: addUserResp,
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


  async getSocities(req: bccDto) {
    try {
      const data = await this.sharedService.executeQuery(
        `SELECT * from Societies where bcc_code=${req.bcc_code}`,
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
