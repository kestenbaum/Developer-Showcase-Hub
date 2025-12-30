import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
}
