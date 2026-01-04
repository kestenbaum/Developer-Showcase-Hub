'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { useStoreSkills } from "@/store/use-store-skills";
import { Button, Field, Skill } from "@/components/UI";
import { SkillService } from "@/api/skill/services/skillServices";
import { SkillType } from "@/api/types";

const skillService = new SkillService();

const Page = () => {
    const { skills, fetchSkills, error, isLoading } = useStoreSkills();
    const [skill, setSkill] = useState<string>("");

    useEffect(() => {
        fetchSkills()
    }, []);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>;

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newSkill: Omit<SkillType, "id"> = {
            title: skill.trim()
        }
        await skillService.createSkill(newSkill);
        await fetchSkills();
        setSkill("")
    }

    async function handleDelete (id: string): Promise<void> {
       await skillService.deleteSkill(id);
       await fetchSkills();
    }

    return (
        <div className="w-full mx-auto bg-gray-500 px-4">
            <div className="flex min-h-full justify-between flex-col p-6">
                <h2 className="mb-4">Admin panel</h2>
                <div className="flex flex-wrap flex-col mb-2.5">
                    <p className="text-black mb-2.5">Your skills:</p>
                    <ul className="flex flex-wrap gap-2.5">
                        {skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="flex items-center bg-gray-200 rounded-lg px-3 py-1 space-x-2"
                            >
                                <Skill>{skill.title}</Skill>
                                <button
                                    onClick={() => handleDelete(skill.id)}
                                    className="text-red-500 hover:text-white hover:bg-red-500 rounded-full w-6 h-6 flex items-center justify-center transition cursor-pointer"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
                <h2 className="text-black mb-1.5">New skills:</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        label="Add Skill"
                        name="skill"
                        key="skill"
                        placeholder="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                    />
                    <Button type="submit">Create</Button>
                </form>
            </div>
        </div>
    );
};

export default Page;