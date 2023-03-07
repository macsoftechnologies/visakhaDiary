import { Test, TestingModule } from '@nestjs/testing';
import { BccController } from './bcc.controller';
import { BccService } from './bcc.service';

describe('BccController', () => {
  let controller: BccController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BccController],
      providers: [BccService],
    }).compile();

    controller = module.get<BccController>(BccController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
