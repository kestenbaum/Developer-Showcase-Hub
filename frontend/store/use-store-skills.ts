import {create} from "zustand/react";
import {SkillService, SkillType} from "@/api/skill/skill";

interface SkillState {
    skills: SkillType[];
    isLoading: boolean;
    error: string | null;
    fetchSkills: () => Promise<void>;
}

const getAllSkills = new SkillService();

export const useStoreSkills = create<SkillState>((set) => ({
    skills: [],
    error: null,
    isLoading: false,

    fetchSkills: async () => {
        set({isLoading: true});
        try {
            const data: SkillType[] = await getAllSkills.getSkills();
            set({skills: data, isLoading: false, error: null});
        } catch (error) {
            set({isLoading: false, error: "Error while fetching skills."});
        }
    }
}))