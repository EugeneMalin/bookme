import { IBase } from "./Base"

export interface IHeader extends IBase {

}

export const Header = (props: IHeader) => {
    return <header>
        Заголовок
    </header>
}
