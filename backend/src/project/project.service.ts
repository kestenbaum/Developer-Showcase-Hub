import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { SkillEntity } from '../skill/entities/skill.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
    @InjectRepository(Project) private readonly repo: Repository<Project>,
  ) {}

  async create(dto: CreateProjectDto) {
    const skills =
      dto.skills && dto.skills.length > 0
        ? await this.skillRepository.findBy({
            id: In(dto.skills),
          })
        : [];

    const project = this.repo.create({
      title: dto.title,
      description: dto.description,
      linkUrl: dto.linkUrl,
      imageUrl: dto.imageUrl,
      skills: skills,
    });

    return this.repo.save(project);
  }

  async findAll() {
    return await this.repo.find({
      relations: ['skills'],
    });
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
