import { AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { ProjectType } from "@/api/types";


class ProjectServices {
    private axios: AxiosInstance = apiInstance;

    public async getAllProjects(): Promise<ProjectType[]>  {
        try {
            const response = await this.axios.get<ProjectType[]>('/project')
            return response.data;
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e))
            console.error(error.message)
            throw error;
        }
    }
}

export const  projectServices = new ProjectServices();