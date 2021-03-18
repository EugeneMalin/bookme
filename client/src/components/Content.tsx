import { IBase } from "./Base"

export interface IContent extends IBase {

}

export const Content = (props: IContent) => {
    return <main className={props.className}>
        Содержимое сайта
    </main>
}