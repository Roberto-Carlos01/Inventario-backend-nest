import { Module } from '@nestjs/common';
import { CategoriaModule } from './categoria/categoria.module';
import { MarcaModule } from './marca/marca.module';
import { ImpuestoModule } from './impuesto/impuesto.module';

@Module({
  imports: [CategoriaModule, MarcaModule, ImpuestoModule]
})
export class CatalogosModule {}
