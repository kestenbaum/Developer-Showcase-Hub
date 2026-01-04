'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { useStoreSkills } from "@/store/use-store-skills";
import { Button, Field, Skill } from "@/components/UI";
import { skillService } from "@/api/skill/services/skillServices";
import { ProjectType, SkillType } from "@/api/types";
import { projectServices } from "@/api/project/services/projectServices";
import { useStoreProjects } from "@/store/use-store-projects";

const Page = () => {
    const { skills, fetchSkills, error, isLoading } = useStoreSkills();
    const { projects, fetchProjects } = useStoreProjects()
    const [skill, setSkill] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [project, setProject] = useState<ProjectType>({
        title: "",
        description: "",
        skills: [],
        linkUrl: ""
    });

    useEffect(() => {
        fetchSkills()
        fetchProjects()
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

    async function handleCreateProject (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', project.title);
        formData.append('description', project.description);
        formData.append('linkUrl', project.linkUrl);
        formData.append('skills', JSON.stringify(project.skills.map(s => s.id)));

        if (image) {
            formData.append('image', image);
        }

        await projectServices.createProject(formData)
        setProject({
            title: "",
            description: "",
            skills: [],
            linkUrl: ""
        })
    }

    async function handleDelete (id: string): Promise<void> {
       await skillService.deleteSkill(id);
       await fetchSkills();
    }

    async function handleDeleteProject (id: string) {
        await projectServices.deleteProject(id)
        await fetchSkills();
    }

    function toggleSkill(skill: SkillType) {
        setProject(prev => {
            const exists = prev.skills.some(s => s.id === skill.id);

            return {
                ...prev,
                skills: exists
                    ? prev.skills.filter(s => s.id !== skill.id)
                    : [...prev.skills, skill]
            };
        });
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
                <form className="border-solid border-y-2 py-2.5"
                    onSubmit={handleSubmit}>
                    <Field
                        label="Add Skill"
                        name="skill"
                        placeholder="Add skill..."
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                    />
                    <Button type="submit">Create</Button>
                </form>
                <div>
                    {projects.map((project) => <div key={project.id}>
                        Project name: {project.title}
                        <button
                            onClick={() => handleDeleteProject(String(project.id))}
                            className="text-red-500 hover:text-white hover:bg-red-500 rounded-full w-6 h-6 flex items-center justify-center transition cursor-pointer"
                        >
                            ×
                        </button>
                    </div>)}
                </div>
                <h2 className="text-black mb-1.5 py-2.5">New project:</h2>
                <form onSubmit={handleCreateProject}>
                    <Field
                        label="Add Title"
                        name="title"
                        placeholder="Create title..."
                        value={project.title}
                        onChange={(e) => setProject({ ...project, [e.target.name]: e.target.value})}
                    />
                    <Field
                        label="Add Description"
                        name="description"
                        placeholder="Create description..."
                        value={project.description}
                        onChange={(e) => setProject({ ...project, [e.target.name]: e.target.value})}
                    />
                    <Field
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setImage(file);
                        }}
                    />
                    <div className="flex flex-wrap gap-2 mb-2.5">
                        {skills.map(skill => {
                            const checked = project.skills.some(s => s.id === skill.id);

                            return (
                                <label
                                    key={skill.id}
                                    className={`px-3 py-1 rounded cursor-pointer border ${checked ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
                                >
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={checked}
                                        onChange={() => toggleSkill(skill)}
                                    />
                                    {skill.title}
                                </label>
                            );
                        })}
                    </div>
                    <Button type="submit">Create</Button>
                </form>
            </div>
        </div>
    );
};

export default Page;