import {create} from "zustand/react";

interface SkillItem {
    id: number;
    item: string;
}

interface State {
    skills: SkillItem[];
}

const State: SkillItem[] = [
    {id: 1, item: "Html"},
    {id: 2, item: "Css"},
    {id: 3, item: "Javascript"},
    {id: 4, item: "React"},
    {id: 5, item: "Redux"},
    {id: 6, item: "Zustand"},
    {id: 7, item: "React-Query"},
]

export const useStoreSkills = create<State>((set) => ({
    skills: State
}))