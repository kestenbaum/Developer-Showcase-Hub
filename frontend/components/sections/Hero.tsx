import React from 'react';
import Button from "@/components/UI/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" id="hero">
            <img
                src="/common-bg.svg"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-10 blur-[3px]"
            />

            <div className="relative z-10 px-6 md:px-12">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight leading-tight">
                        Hey, I'm Oleksii Vovnenko
                    </h1>

                    <p className="text-xs text-gray-700 max-w-2xl leading-relaxed">
                        A Result-Oriented Web Developer building and managing Websites and Web Applications that leads
                        to the success of the overall product
                    </p>

                    <Link href="#projects">
                        <Button>Projects</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;