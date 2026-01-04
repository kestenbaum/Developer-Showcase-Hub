export type SkillType = {
    id: string
    title: string
}

export interface ProjectType {
    id?: string
    title: string
    description: string
    imageUrl?: string
    linkUrl: string
    skills: SkillType[]
}