import { PAGES } from "../Const";

/**
 * Footer component props interface
 */
export interface IFooter {
    /**
     * Class name of component
     */
    className: string;

    /**
     * Marker of active user
     */
    hasUser: boolean;
    
    /**
     * Css classes from withStyles modifyer
     */
    classes?: {
        toolbar: string
    };

    /**
     * Identifier of selected button
     */
    id: string;

    /**
     * Handler for toolbar item click
     */
    onActionClick: (id: PAGES, params?: any) => void;
}
