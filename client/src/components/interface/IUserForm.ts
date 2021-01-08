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
     * Caption in editor
     */
    caption: string;

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
    onAction: (act: boolean) => void;
}