import {AxiosInstance} from "axios";
import {apiInstance} from "@/api";

export type SkillType = {
    id: string
    title: string
}

export class SkillService {
    private axios: AxiosInstance = apiInstance

    public async getSkills(): Promise<SkillType[]> {
        const response = await this.axios.get<SkillType[]>('/skill')
        return response.data
    }
}