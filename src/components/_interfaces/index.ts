import { HTMLAttributes, ReactNode } from "react";

export interface DefaultProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}