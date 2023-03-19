import { Module } from '@nestjs/common';
import { BccService } from './bcc.service';
import { BccController } from './bcc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BCC } from './entities/bcc.entity';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports: [TypeOrmModule.forFeature([BCC])],
  controllers: [BccController],
  providers: [BccService,SharedService],
})
export class BccModule {}
