/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';
import { AssignPermissionsDto } from './dto/assignPermissions.dto';
import { Permiso } from '../permiso/entities/permiso.entity';
import { RolTienePermiso } from './entities/rol_tiene_permiso.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol) private rolRepository: Repository<Rol>,
    @InjectRepository(Permiso) private permisoRepository: Repository<Permiso>,
    @InjectRepository(RolTienePermiso)
    private rolTienePermisoRepository: Repository<RolTienePermiso>,
  ) {}
  async create(createRolDto: CreateRolDto): Promise<Rol> {
    const newRol = this.rolRepository.create(createRolDto);
    return await this.rolRepository.save(newRol);
  }

  findAll() {
    return this.rolRepository.find();
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolRepository.findOne({ where: { idrol: id } });
    if (!rol) {
      throw new NotFoundException(`No existe el rol de id: ${id}`);
    }
    return rol;
  }

  async update(id: number, updateRolDto: UpdateRolDto): Promise<Rol> {
    const rol = await this.findOne(id);
    Object.assign(rol, updateRolDto);
    return await this.rolRepository.save(rol);
  }

  async remove(id: number) {
    //validar que el rol exista
    const rol = await this.findOne(id);
    return this.rolRepository.remove(rol);
  }
  async addPermissionsRol(id: number, permissions: AssignPermissionsDto) {
    //buscamos al rol , si no existe => error
    const rol = await this.findOne(id);

    //buscamos todos los permisos enviados , si no existe => error
    for (const idPermiso of permissions.idsPermisos) {
      const permiso = await this.permisoRepository.findOne({
        where: { idpermiso: idPermiso },
      });
      if (!permiso) {
        throw new NotFoundException(`No existe el permiso de id: ${id}`);
      }
    }
    //busamos todos los permisos que ya tiene el rol
    //evitamos agregar duplicados (CREAMOS UN SET)
    // lista final que debemos de agregar
    // crear objetos rol tiene permiso cada par rol y permiso
    // guardarlos
    //devolver el rol con sus permisos
  }
  async findPermissionsRol(id: number) {}
  async removePermissionsRol(id: number, permissions: AssignPermissionsDto) {}
}
