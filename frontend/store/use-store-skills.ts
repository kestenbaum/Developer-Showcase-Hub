import {create} from "zustand/react";
import { skillService } from "@/api/skill/services/skillServices";
import { SkillType } from "@/api/types";

interface SkillState {
    skills: SkillType[];
    isLoading: boolean;
    error: string | null;
    fetchSkills: () => Promise<void>;
}

export const useStoreSkills = create<SkillState>((set) => ({
    skills: [],
    error: null,
    isLoading: false,

    fetchSkills: async () => {
        set({isLoading: true});
        try {
            const data: SkillType[] = await skillService.getSkills();
            set({skills: data, isLoading: false, error: null});
        } catch (e: unknown) {
            const error = e instanceof Error ? e : new Error(String(e));
            set({isLoading: false, error: error.message});
        }
    }
}))