import React from 'react';
import Button from "@/components/UI/Button";
import { Container } from "./Container";
import Skill from "@/components/UI/Skill";
import Link from "next/link";

const About = () => {
    return (
        <section className="w-full bg-gray-50 py-20 md:py-28" id="about">
            <Container>
                <div className="flex flex-col items-center justify-center w-full mb-16">
                    <h2 className="font-extrabold text-4xl text-gray-900 text-center mb-6">
                        About Me
                    </h2>
                    <span className="w-16 h-1.5 bg-blue-600 rounded mb-6"></span>
                    <p className="font-medium text-lg md:text-xl text-center text-gray-600 max-w-3xl leading-relaxed">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    <div>
                        <h3 className="text-gray-900 text-2xl mb-6 font-bold">
                            Get to know me!
                        </h3>
                        <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4">
                            <p>
                                I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            </p>
                            <p>
                                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my{' '}
                                <Link className="text-blue-600 hover:text-blue-800 cursor-pointer" href="https://www.linkedin.com/in/oleksii-vovnenko/">
                                    Linkedin
                                </Link>.
                            </p>
                            <p>
                                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            </p>
                        </div>

                        <Button>Contact</Button>
                    </div>

                    <div>
                        <h3 className="text-gray-900 text-2xl mb-6 font-bold">
                            My Skills
                        </h3>

                        <ul className="flex flex-wrap gap-3">
                            <Skill>HTML</Skill>
                            <Skill>CSS</Skill>
                            <Skill>JavaScript</Skill>
                            <Skill>TypeScript</Skill>
                            <Skill>React</Skill>
                            <Skill>Next.js</Skill>
                            <Skill>Tailwind CSS</Skill>
                            <Skill>GIT</Skill>
                            <Skill>Redux</Skill>
                        </ul>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default About;