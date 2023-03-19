import { Test, TestingModule } from '@nestjs/testing';
import { RecoveriesentryService } from './recoveriesentry.service';

describe('RecoveriesentryService', () => {
  let service: RecoveriesentryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoveriesentryService],
    }).compile();

    service = module.get<RecoveriesentryService>(RecoveriesentryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
