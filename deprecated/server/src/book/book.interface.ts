/**
 * Book class
 */
export interface IBook {

    /**
     * Identifier of book
     */
    id: number;

    /**
     * Name of book
     */
    name: string;

    /**
     * Links to stores
     */
    link?: string;

    /**
     * Description of book
     */
    description?: string;
}
