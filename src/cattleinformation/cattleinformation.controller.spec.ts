import { Test, TestingModule } from '@nestjs/testing';
import { CattleinformationController } from './cattleinformation.controller';
import { CattleinformationService } from './cattleinformation.service';

describe('CattleinformationController', () => {
  let controller: CattleinformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CattleinformationController],
      providers: [CattleinformationService],
    }).compile();

    controller = module.get<CattleinformationController>(CattleinformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
