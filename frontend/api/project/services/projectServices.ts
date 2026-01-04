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

    public async createProject(project: FormData): Promise<ProjectType> {
        try {
            const response = await this.axios.post<ProjectType>('/project', project, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            return response.data;
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e))
            console.error(error.message)
            throw error;
        }
    }

    public async deleteProject(projectId: string): Promise<void> {
        try {
            const response = await this.axios.delete(`/project/${projectId}`);
            return response.data;
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e))
            console.error(error.message)
            throw error;
        }
    }
}

export const  projectServices = new ProjectServices();