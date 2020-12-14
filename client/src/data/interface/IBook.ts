/**
 * Interface of main system item - book
 */
export interface IBook {
    /**
     * Short name of book
     */
    name: string;

    /**
     * Name of author
     */
    author: string;

    /**
     * Description of book
     */
    about?: string;

    /**
     * Link to the cover
     */
    cover?: string;

    /**
     * Different links to the book on shops
     */
    links?: string[];

    /**
     * Keywords about book
     */
    tags?: string[];
}
