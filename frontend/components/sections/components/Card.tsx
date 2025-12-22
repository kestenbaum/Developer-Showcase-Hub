import React from 'react';
import Image from "next/image";
import TestImage from "@/public/dopefolio.jpeg";
import Button from "@/components/UI/Button";
import Skill from "@/components/UI/Skill";

const Card = () => {
    return (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Image
                src={TestImage}
                alt="image"
                width="400"
                height="400"
            />
            <div className="flex flex-col gap-2.5">
                <h3 className="text-black text-xl font-bold">Dopefolio</h3>
                <p className="text-black text-[16px] font-medium">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>
                <ul className="flex flex-wrap gap-2.5">
                    <Skill>HTML</Skill>
                    <Skill>CSS</Skill>
                    <Skill>Javascript</Skill>
                    <Skill>React</Skill>
                </ul>
                <Button>Case Study</Button>
            </div>
        </div>
    );
};

export default Card;