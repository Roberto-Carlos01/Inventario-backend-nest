import { Test, TestingModule } from '@nestjs/testing';
import { TrasladoService } from './traslado.service';

describe('TrasladoService', () => {
  let service: TrasladoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrasladoService],
    }).compile();

    service = module.get<TrasladoService>(TrasladoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
