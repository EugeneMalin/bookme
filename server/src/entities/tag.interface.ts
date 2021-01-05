/**
 * Tags for fast filtering, for example genre
 */
export interface ITag {
    
    /**
     * Identifier of tag
     */
    id: number;

    /**
     * Name of tag
     */
    name: string;

    /**
     * Description of tag
     */
    description?: string;
}