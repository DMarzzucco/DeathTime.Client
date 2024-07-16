import { ReactNode } from "react";

export interface parrafProps { children: ReactNode }
export interface ProviderInt { children: JSX.Element }
export interface contextProps {
    user?: string;
}