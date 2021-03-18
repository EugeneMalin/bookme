import { IBase } from "./Base"

export interface IHeader extends IBase {
    //todo create user class
    user?: any;
    
    onLogIn: () => void;
    onSignUp: () => void;
    onLogOut: () => void;
    onReadNotifications: () => void;
}

export const Header = (props: IHeader) => {
    return <header className={props.className}>
        Заголовок
    </header>
}
