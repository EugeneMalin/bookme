/**
 * Person class
 */
export interface IPerson {

    /**
     * Identifier of person
     */
    id: number;

    /**
     * First name
     */
    name: string;

    /**
     * Second name
     */
    surname: string;

    /**
     * Third name, additional name of person
     */
    patronymic?: string;
}
