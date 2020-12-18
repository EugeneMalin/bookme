import { IUser } from "../../data/interface/IUser";

/**
 * User form component props
 */
export interface IUserForm {
    /**
     * Editing user
     */
    user?: IUser;

    /**
     * CSS modifyers
     */
    classes?: {
        buttons: string,
        button: string,
        field: string,
        errorBag: string
    }

    /**
     * Commit handler
     */
    onCommit: (user: IUser) => void;

    /**
     * Reject handler
     */
    onReject: () => void;
}