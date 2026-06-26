import { PartialType } from '@nestjs/swagger';
import { CreateDetalleCompraDto } from './create-detalle_compra.dto';

export class UpdateDetalleCompraDto extends PartialType(CreateDetalleCompraDto) {}
