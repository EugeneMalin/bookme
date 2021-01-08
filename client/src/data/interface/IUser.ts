/**
 * Interface of active user
 */
export interface IUser {
    id?: number;

    /**
     * Users contact email address
     */
    email: string,

    /**
     * System username
     */
    login: string;

    /**
     * Hash of users password
     */
    password: string;
}
