import { IBase } from "./Base"

export interface IContent extends IBase {

}

export const Content = (props: IContent) => {
    return <main>
        Содержимое сайта
    </main>
}