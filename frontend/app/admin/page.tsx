'use client';
import React, { useEffect } from 'react';
import { useStoreSkills } from "@/store/use-store-skills";
import { Button, Field, Skill } from "@/components/UI";

const Page = () => {
    const { skills, fetchSkills, error, isLoading } = useStoreSkills();

    useEffect(() => {
        fetchSkills()
    }, []);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-full mx-auto bg-gray-500 px-4">
            <div className="flex min-h-full justify-between flex-col p-6">
                <h2 className="mb-4">Admin panel</h2>
                <div className="flex flex-wrap flex-col mb-2.5">
                    <p className="text-black mb-2.5">Your skills:</p>
                    <ul className="flex gap-2.5">
                        {skills.map((skill) =>
                            <div
                                className="flex flex-wrap flex-col"
                                key={skill.id}>
                            <Skill>{skill.title}</Skill>
                        </div>)}
                    </ul>
                </div>
                <h2 className="text-black mb-2.5">New skills:</h2>
                <form action="">
                    <Field label="Add Skill" name="skill" key="skill" placeholder="skill" />
                    <Button>Create</Button>
                </form>
            </div>
        </div>
    );
};

export default Page;