"use client"
import Link from "next/link";
import React from "react";
import Button from "@/components/UI/Button";
import Skill from "@/components/UI/Skill";
import Title from "@/components/UI/Title";
import {Container} from "@/components/layout";
import {useStoreSkills} from "@/store/use-store-skills";

const About = () => {
    const skills = useStoreSkills((state) => state.skills)
    return (
        <section className="w-full bg-[#fafafa] py-20 md:py-28" id="about">
            <Container>
                <Title
                    title="About Me"
                    description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    <div>
                        <h3 className="text-gray-900 text-[20px] mb-6 font-bold">Get to know me!</h3>
                        <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4">
                            <p className="text-black text-[14px]">
                                I'm a Frontend Focused Web Developer building and managing the Front-end of Websites
                                and Web Applications that leads to the success of the overall product. Check out
                                some of my work in the Projects section.
                            </p>
                            <p className="text-black text-[14px]">
                                I also like sharing content related to the stuff that I have learned over the years
                                in Web Development so it can help other people of the Dev Community. Feel free to
                                Connect or Follow me on my{" "}
                                <Link
                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                    href="https://www.linkedin.com/in/oleksii-vovnenko/"
                                >
                                    Linkedin
                                </Link>
                                .
                            </p>
                            <p className="text-black text-[14px]">
                                I'm open to Job opportunities where I can contribute, learn and grow. If you have a
                                good opportunity that matches my skills and experience then don't hesitate to
                                contact me.
                            </p>
                        </div>

                        <Button>Contact</Button>
                    </div>

                    <div>
                        <h3 className="text-gray-900 text-[20px] mb-6 font-bold">My Skills</h3>

                        <ul className="flex flex-wrap gap-3">
                            {skills && skills.map((skill => <Skill key={skill.id}>{skill.item}</Skill>))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
