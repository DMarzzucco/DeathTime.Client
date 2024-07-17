import React from "react";

export interface InputProps {
    placeholder: string;
    value: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    htmlFor: string;
    title: string;
}
export const InptComps: React.FC<InputProps> = ({ placeholder, value, onChange, htmlFor, title }) => {
    return (
        <div className="flex flex-col my-1 justify-center items-start">
            <label
             htmlFor={htmlFor}
             className="font-bold "
             >{title}</label>
            <input
                className="my-1 p-2 rounded-md border border-slate-500 w-full"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}