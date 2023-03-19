import { Test, TestingModule } from '@nestjs/testing';
import { RecoveriesentryController } from './recoveriesentry.controller';
import { RecoveriesentryService } from './recoveriesentry.service';

describe('RecoveriesentryController', () => {
  let controller: RecoveriesentryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoveriesentryController],
      providers: [RecoveriesentryService],
    }).compile();

    controller = module.get<RecoveriesentryController>(RecoveriesentryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
