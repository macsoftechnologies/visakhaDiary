import { Module } from '@nestjs/common';
import { CattleinformationService } from './cattleinformation.service';
import { CattleinformationController } from './cattleinformation.controller';
import { SharedService } from 'src/shared/shared.service';

@Module({
  controllers: [CattleinformationController],
  providers: [CattleinformationService,SharedService]
})
export class CattleinformationModule {}
