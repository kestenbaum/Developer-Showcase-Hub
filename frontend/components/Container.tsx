import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Container:FC<Props> = ({ children }) => {
    return (
        <div className={`max-w-5xl mx-auto px-4 w-full`}>
            {children}
        </div>
    );
};

export default Container;