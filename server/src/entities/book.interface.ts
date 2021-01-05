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
     * Link to author
     */
    authorId: number;

    /**
     * Links to stores
     */
    link?: string;

    /**
     * Description of book
     */
    description?: string;
}