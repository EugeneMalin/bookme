import { Paper } from "@material-ui/core"
import { IBase } from "./Base"

export interface IContent extends IBase {

}

export const Content = (props: IContent) => {
    return <main className={props.className}>
        <Paper elevation={0}></Paper>
    </main>
}