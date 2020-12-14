/**
 * Interface of registrated person
 */
export interface IPerson {
    /**
     * Name of user
     */
    name: string;

    /**
     * Surname of user
     */
    surname?: string;

    /**
     * Patronymic
     */
    patronymic?: string;

    /**
     * Gender of user
     * @variation true - man
     * @variation false - woman
     */
    gender?: boolean;

    
    /**
     * Long description of user
     */
    about?: string;
}