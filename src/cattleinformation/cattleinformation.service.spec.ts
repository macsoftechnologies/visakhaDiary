import { Test, TestingModule } from '@nestjs/testing';
import { CattleinformationService } from './cattleinformation.service';

describe('CattleinformationService', () => {
  let service: CattleinformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CattleinformationService],
    }).compile();

    service = module.get<CattleinformationService>(CattleinformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
