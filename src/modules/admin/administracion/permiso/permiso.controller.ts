import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

@Controller('permisos')
export class PermisoController {
  constructor(private readonly permisoService: PermisoService) {}

  @Post()
  create(@Body() createPermisoDto: CreatePermisoDto) {
    return this.permisoService.create(createPermisoDto);
  }

  @Get()
  findAll() {
    return this.permisoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.permisoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePermisoDto: UpdatePermisoDto,
  ) {
    return this.permisoService.update(id, updatePermisoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.permisoService.remove(id);
  }
}
