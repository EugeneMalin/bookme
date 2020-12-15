/**
 * Interface of footer buttons
 */
export interface IFooterButton {
    /**
     * Sorting index
     */
    index: number;

    /**
     * Label at button
     */
    label: string;

    /**
     * Primary key of button
     */
    value: string;

    /**
     * Some tsx icon from meterial-ui icons
     */
    icon: any;
}