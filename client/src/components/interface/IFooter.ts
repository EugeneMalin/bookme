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
     * Marker of editing
     */
    isEdit: boolean;

    classes?: {
        toolbar: string
    };

    /**
     * Handler for toolbar item click
     */
    onActionClick: (id: string, params: any) => void;
}
