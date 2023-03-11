import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared.service';
import { Repository } from 'typeorm';
import { Producers } from './schema/producer.schema';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(Producers)
    private producersRepository: Repository<Producers>,
    private readonly sharedService: SharedService,
  ) {}

  async getProducers() {
    try {
      const data = await this.sharedService.executeQuery(
        `SELECT TOP 10 * FROM head_quarters`,
      );

      if (data) {
        return {
          statusCode: HttpStatus.OK,
          Data: data,
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
