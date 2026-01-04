import React, {FC} from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    label?: string;
    isTextarea?: boolean;
}

const Field: FC<Props> = ({label, isTextarea = false, id, className = "", ...props}) => {
    const baseStyles = `
        bg-[#f0f0f0] 
        text-gray-800 
        rounded-lg 
        p-2
        text-base 
        font-semibold
        border-2 border-transparent
        focus:border-[#7843E9] 
        focus:bg-white
        outline-none 
        transition-all
        placeholder:text-gray-400
        text-xs
        ${className}
    `;

    return (
        <div className="flex flex-col gap-2 mb-6">
            <label
                htmlFor={id}
                className="text-[12px] font-bold text-gray-700 uppercase tracking-wider"
            >
                {label}
            </label>

            {isTextarea ? (
                <textarea
                    id={id}
                    rows={5}
                    className={`${baseStyles} resize-none`}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={id}
                    className={baseStyles}
                    {...props}
                />
            )}
        </div>
    );
};

export default Field;