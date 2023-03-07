import { Module } from '@nestjs/common';
import { BccService } from './bcc.service';
import { BccController } from './bcc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BCC } from './entities/bcc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BCC])],
  controllers: [BccController],
  providers: [BccService],
})
export class BccModule {}
