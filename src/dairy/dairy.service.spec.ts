import { Test, TestingModule } from '@nestjs/testing';
import { DairyService } from './dairy.service';

describe('DairyService', () => {
  let service: DairyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DairyService],
    }).compile();

    service = module.get<DairyService>(DairyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
