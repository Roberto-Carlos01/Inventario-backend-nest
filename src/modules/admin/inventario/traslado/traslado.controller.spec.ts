import { Test, TestingModule } from '@nestjs/testing';
import { TrasladoController } from './traslado.controller';
import { TrasladoService } from './traslado.service';

describe('TrasladoController', () => {
  let controller: TrasladoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrasladoController],
      providers: [TrasladoService],
    }).compile();

    controller = module.get<TrasladoController>(TrasladoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
