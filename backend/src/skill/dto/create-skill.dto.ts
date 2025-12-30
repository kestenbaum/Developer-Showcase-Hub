import { Length } from 'class-validator';

export class CreateSkillDto {
  @Length(1, 128)
  id: string;

  @Length(1, 15)
  title: string;
}
