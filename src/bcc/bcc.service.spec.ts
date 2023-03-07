import { Test, TestingModule } from '@nestjs/testing';
import { BccService } from './bcc.service';

describe('BccService', () => {
  let service: BccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BccService],
    }).compile();

    service = module.get<BccService>(BccService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
