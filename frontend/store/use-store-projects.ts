import { create } from "zustand/react";
import { ProjectType } from "@/api/types";
import { projectServices } from "@/api/project/services/projectServices";

interface ProjectsState {
    isLoading: boolean;
    error: string | null;
    fetchProjects: () => void;
    projects: ProjectType[]
}

export const useStoreProjects = create<ProjectsState>((set) => ({
    projects: [],
    error: null,
    isLoading: false,
    fetchProjects: async () => {
        set({isLoading: true});
        try {
            const data = await projectServices.getAllProjects();
            set({ projects: data, isLoading: false, error: null });
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e));
            set({isLoading: false, error: error.message});
        }
    },
}))