import { Module } from '@nestjs/common';
import { SocietiesService } from './societies.service';
import { SocietiesController } from './societies.controller';
import { SharedService } from 'src/shared/shared.service';

@Module({
  controllers: [SocietiesController],
  providers: [SocietiesService,SharedService]
})
export class SocietiesModule {}
