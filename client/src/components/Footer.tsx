import { IBase } from "./Base"

export interface IFooter extends IBase {

}

export const Footer = (props: IFooter) => {
    return <footer className={props.className}>
        Подвал сайта
    </footer>
}
