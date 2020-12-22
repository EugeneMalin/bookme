import { Empty } from "./Empty";
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';
import { IBooks } from "../interface/IBooks";

const styles = (theme: Theme) => createStyles({
    empty: {
        display: 'flex',
        justifyContent: 'center'
    },
    item: {
        width: 125,
        height: 125,

        overflow: 'hidden'
    }
});

export const Books = withStyles(styles)((props: IBooks) => {
    const emptyView = true ? <div className={props.classes?.empty}>
        <Empty/>
    </div> : null

    return <><Grid container spacing={3}>
            
        </Grid>
        {emptyView}
    </>
});

