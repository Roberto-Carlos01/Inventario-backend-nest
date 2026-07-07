import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(@InjectRepository(Rol) private rolRepository: Repository<Rol>) {}
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
    const rol = await this.findOne(id);
    return this.rolRepository.remove(rol);
  }
}
