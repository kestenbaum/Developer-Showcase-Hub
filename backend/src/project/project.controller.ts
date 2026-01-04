import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() body: CreateProjectDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    let skillsIds: string[] = [];

    if (body.skills) {
      if (String(body.skills)) {
        try {
          skillsIds = JSON.parse(String(body.skills)) as string[];
        } catch (e: unknown) {
          const error = e instanceof Error ? e : new Error(String(e));
          console.error(error.message);
          skillsIds = [];
        }
      } else if (Array.isArray(body.skills)) {
        skillsIds = body.skills;
      }
    }

    const projectDto: CreateProjectDto = {
      title: body.title,
      description: body.description,
      linkUrl: body.linkUrl,
      imageUrl: image
        ? `/uploads/${image.filename}`
        : (body.imageUrl ?? '/dopefolio.png'),
      skills: skillsIds,
    };

    return this.projectService.create(projectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(id);
  }
}
