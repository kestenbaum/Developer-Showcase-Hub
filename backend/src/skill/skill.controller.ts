import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillEntity } from 'src/skill/entities/skill.entity';
import { DeleteResult } from 'typeorm';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto): Promise<SkillEntity> {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  findAll(): Promise<SkillEntity[]> {
    return this.skillService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.skillService.delete(id);
  }
}
