"use client"
import React, { useEffect } from "react"
import Container from "@/components/layout/Container"
import Card from "@/components/sections/components/Card"
import Title from "@/components/UI/Title"
import { useStoreProjects } from "@/store/use-store-projects";

const Projects = () => {
    const { projects, fetchProjects, error, isLoading } = useStoreProjects();

    useEffect(() => {
        fetchProjects()
    }, [])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error fetching.</div>

    return (
        <section className="bg-white" id="projects">
            <Container>
                <div className="pt-20 pb-10">
                    <Title
                        title="Projects"
                        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
                    />
                    <div className="flex flex-col gap-7">
                        {projects.map((project) =>
                            <Card
                                id={project.id}
                                key={project.id}
                                linkUrl={project.linkUrl}
                                imageUrl={project.imageUrl}
                                skills={project.skills}
                                title={project.title}
                                description={project.description}
                            />
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Projects
