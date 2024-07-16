import React from "react";
import { parrafProps } from "../../interface/interfaces";

export const NumberDate: React.FC<parrafProps> = ({ children }) => {
    return (
        <p className="font-bold mx-1 text-2xl">{children}</p>
    )
}
export const LimitTimer: React.FC = () => {
    return (
        <p>2024-07-26 <span className="font-bold">{"<>"}</span> 17:16:00</p>
    )
}