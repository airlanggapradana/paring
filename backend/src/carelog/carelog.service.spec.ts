import { Test, TestingModule } from '@nestjs/testing';
import { CarelogService } from './carelog.service';

describe('CarelogService', () => {
  let service: CarelogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarelogService],
    }).compile();

    service = module.get<CarelogService>(CarelogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
