import { Module } from '@nestjs/common';
import { RecoveriesentryService } from './recoveriesentry.service';
import { RecoveriesentryController } from './recoveriesentry.controller';
import { SharedService } from 'src/shared/shared.service';

@Module({

  controllers: [RecoveriesentryController],
  providers: [RecoveriesentryService,SharedService]
})
export class RecoveriesentryModule {}
