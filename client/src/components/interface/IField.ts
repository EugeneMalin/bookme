/**
 * Input field setting interface
 */
export interface IField<T> {
    /**
     * Handling data field name
     */
    field: keyof T;

    /**
     * String label for data
     */
    label: string;

    /**
     * Additional mark about field
     */
    helper?: string;

    /**
     * Type of field 
     * @see html5 input types
     */
    type: string;

    /**
     * Marker of required field
     */
    required?: boolean;
}
