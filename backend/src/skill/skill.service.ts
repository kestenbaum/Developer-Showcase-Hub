import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Repository } from 'typeorm';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<SkillEntity> {
    const skill: SkillEntity = this.skillRepository.create(createSkillDto);
    return this.skillRepository.save(skill);
  }

  async findAll(): Promise<SkillEntity[]> {
    return this.skillRepository.find();
  }

  async delete(id: string) {
    return this.skillRepository.delete(id);
  }
}
