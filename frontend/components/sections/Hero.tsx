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
                        I'm from Ukraine and have been a web developer for the last 2 years. I believe in strong
                        dedication in each project of my clients and client's satisfaction is the first concern in my
                        career.
                        I'm adequate in the prominent skills HTML, CSS, Javascript, different web hosting sectors and so
                        on. I can solve problems analytically and can face any complex situation with a molive of fixing
                        it with total vividness. Also, I handle customers with a friend like manner keeping myself
                        within professionalism.
                        You can pick me with an assurance of honest and best services.
                        Thank You.
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