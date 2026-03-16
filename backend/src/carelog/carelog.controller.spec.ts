import { Test, TestingModule } from '@nestjs/testing';
import { CarelogController } from './carelog.controller';
import { CarelogService } from './carelog.service';

describe('CarelogController', () => {
  let controller: CarelogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarelogController],
      providers: [CarelogService],
    }).compile();

    controller = module.get<CarelogController>(CarelogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
