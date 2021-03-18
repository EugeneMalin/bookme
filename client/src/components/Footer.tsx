import { IBase } from "./Base"

export interface IFooter extends IBase {

}

export const Footer = (props: IFooter) => {
    return <footer>
        Подвал сайта
    </footer>
}
