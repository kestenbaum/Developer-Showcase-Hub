import {AxiosInstance} from "axios";
import {apiInstance} from "@/api";
import { SkillType } from "@/api/types";


export class SkillService {
    private axios: AxiosInstance = apiInstance

    public async getSkills(): Promise<SkillType[]> {
        try {
            const response = await this.axios.get<SkillType[]>('/skill')
            return response.data
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e));
            console.error(error.message);
            throw error;
        }
    }
}