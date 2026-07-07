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
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { AssignPermissionsDto } from './dto/assignPermissions.dto';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRolDto: UpdateRolDto,
  ) {
    return this.rolService.update(id, updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.remove(id);
  }

  @Post(':id/permisos')
  addPermissions(
    @Param('id', ParseIntPipe) id: number,
    @Body() permissions: AssignPermissionsDto,
  ) {
    return this.rolService.addPermissionsRol(id, permissions);
  }
  @Get(':id/permisos')
  findPermissions(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.findPermissionsRol(id);
  }
  @Delete(':id/permisos')
  removePermissions(@Param('id', ParseIntPipe) id: number) {
    return this.rolService.removePermissionsRol(id);
  }
}
