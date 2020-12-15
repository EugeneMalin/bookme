import { ReactNode } from "react";

/**
 * Interface of tab component options
 */
export interface ITab {
    /**
     * Inner content
     */
    children?: ReactNode;

    /**
     * Index of item
     */
    index: any;

    /**
     * Selected index
     */
    value: any;

    /**
     * Class name of component
     */
    className?: string;
}
