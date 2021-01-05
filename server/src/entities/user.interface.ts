/**
 * User class
 */
export interface IUser {

    /**
     * Identifier of User
     */
    id: number;

    /**
     * Identifier of Person, person contains additional data of user
     */
    personId?: number;

    /**
     * Email of user
     */
    email: string;

    /**
     * Unique short name of user
     */
    login: string;

    /**
     * Hash of password
     */
    password: string;
}
