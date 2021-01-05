/**
 * Book mark class
 */
export interface IMark {

    /**
     * Identifier of mark
     */
    id: number;

    /**
     * Indentifier of book
     */
    bookId: number;

    /**
     * Identifier of author of mark
     */
    userId: number;

    /**
     * Count of mark
     */
    count: number;

    /**
     * Description of mark
     */
    description?: string;
}
