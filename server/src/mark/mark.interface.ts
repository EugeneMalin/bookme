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
     * Count of mark
     */
    count: number;

    /**
     * Description of mark
     */
    description?: string;
}
