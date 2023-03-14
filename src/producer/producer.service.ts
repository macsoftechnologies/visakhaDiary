import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared.service';
import { Repository } from 'typeorm';
import { producerDto } from './dto/producer.dto';
import { Producers } from './schema/producer.schema';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(Producers)
    private producersRepository: Repository<Producers>,
    private readonly sharedService: SharedService,
  ) {}

  async getProducers(req: producerDto) {
    try {
      const data = await this.sharedService.executeQuery(
        `SELECT pno, pname, bcc_name, hq_name, society_name from PRODUCERS p left join BCC b on p.bcc_code = b.bcc_code left join HEAD_QUARTERS h on h.hq_code = b.hq_code left join SOCIETIES s on s.society_code = p.society_code where pno=${req.pno} AND society_code=${req.society_code} AND hq_code=${req.hq_code}`,
      );
      // const count = data;
      // const noPages = count % 10;
      // let firstRecord = 1;
      // let lastRecord = 10;
      // let query;
      // for (let i = 0; i < noPages - 1; i++) {
      //   query = await this.sharedService.executeQuery(
      //     `Select * from (select *, row_number() over(order by p.no) as record_number) where record_number between startRecord and finalRecord)`,
      //   );
      // }
      //console.log(query);
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
