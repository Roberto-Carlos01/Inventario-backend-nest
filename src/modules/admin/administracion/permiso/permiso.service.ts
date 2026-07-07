import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Permiso } from './entities/permiso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso) private permisoRepository: Repository<Permiso>,
  ) {}

  async create(createPermisoDto: CreatePermisoDto): Promise<Permiso> {
    const newPermiso = this.permisoRepository.create(createPermisoDto);
    return await this.permisoRepository.save(newPermiso);
  }

  findAll() {
    return this.permisoRepository.find();
  }

  async findOne(id: number): Promise<Permiso> {
    const permiso = await this.permisoRepository.findOne({
      where: { idpermiso: id },
    });
    if (!permiso) {
      throw new NotFoundException(`No existe el permiso de id: ${id}`);
    }
    return permiso;
  }

  async update(
    id: number,
    updatePermisoDto: UpdatePermisoDto,
  ): Promise<Permiso> {
    const permiso = await this.findOne(id);
    Object.assign(permiso, updatePermisoDto);
    await this.permisoRepository.save(permiso);

    return this.findOne(id);
  }

  async remove(id: number) {
    const permiso = await this.findOne(id);
    return this.permisoRepository.remove(permiso);
  }
}
