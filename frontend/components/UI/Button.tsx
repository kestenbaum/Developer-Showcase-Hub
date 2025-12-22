import React, { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button: FC<Props> = ({children, ...props}) => {
    return (
        <button
            {...props}
            className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider shadow-lg cursor-pointer hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300">
            {children}
        </button>
    );
};

export default Button;