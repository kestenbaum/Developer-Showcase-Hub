import React, { FC } from 'react';
import Image from "next/image";
import Button from "@/components/UI/Button";
import Skill from "@/components/UI/Skill";
import { ProjectType } from "@/api/types";
import Link from "next/link";


const Card: FC<ProjectType> = ({linkUrl, imageUrl, skills, title, description}) => {
    return (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <Image
                src={imageUrl ?? '/dopelfolio.png'}
                alt="image"
                width="400"
                height="400"
            />
            <div className="flex flex-col gap-2.5">
                <h3 className="text-black text-xl font-bold">{title}</h3>
                <p className="text-black text-[16px] font-medium">{description}</p>
                <ul className="flex flex-wrap gap-2.5">
                    {skills.map(skill => <Skill key={skill.id}>{skill.title}</Skill>)}
                </ul>
                <Link href={linkUrl}>
                    <Button>Case Study</Button>
                </Link>
            </div>
        </div>
    );
};

export default Card;