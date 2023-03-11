import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';
import { Producers } from './schema/producer.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producers])],
  controllers: [ProducerController],
  providers: [ProducerService, SharedService],
})
export class ProducerModule {}
