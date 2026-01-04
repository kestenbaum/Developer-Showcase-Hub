import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private readonly repo: Repository<Project>,
  ) {}

  async create(dto: CreateProjectDto) {
    const project = this.repo.create(dto);
    return this.repo.save(project);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    return await this.repo.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateProjectDto) {
    const existingProject = await this.repo.findOne({ where: { id } });
    if (!existingProject) return null;

    Object.assign(existingProject, dto);
    return this.repo.save(existingProject);
  }

  async remove(id: string) {
    return await this.repo.delete(id);
  }
}
