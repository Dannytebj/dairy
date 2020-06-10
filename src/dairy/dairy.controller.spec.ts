import { Test, TestingModule } from '@nestjs/testing';
import { DairyController } from './dairy.controller';

describe('Dairy Controller', () => {
  let controller: DairyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DairyController],
    }).compile();

    controller = module.get<DairyController>(DairyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
