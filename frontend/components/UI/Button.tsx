import React, {FC} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

const Button: FC<Props> = ({children, className = "", ...props}) => {
    return (
        <button
            {...props}
            className={`bg-[#7843E9] w-fit text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 ${className}`}>
            {children}
        </button>
    );
};

export default Button;