import { IStore } from "../../data/interface/IStore";
import { Theme, withStyles, createStyles, Grid, ListItemAvatar, Box, Avatar, ListItemText, Paper} from '@material-ui/core';
import { connect } from "react-redux";
import { IPeople } from "../interface/IPeople";
import { Person as PersonIcon} from '@material-ui/icons';


const styles = (theme: Theme) => createStyles({
    empty: {
        display: 'flex',
        justifyContent: 'center'
    },
    item: {
        minWidth: 100,
        maxWidth: 120,
        overflow: 'hidden'
    }
});

/**
 * Users list component
 */
export const People = connect(
    (state: IStore) => {
        return{people: state.people}
    }, null
)(withStyles(styles)((props: IPeople) => {
    const emptyView = !props.people?.length ? <div className={props.classes?.empty}>
        <div>There is no one user here...</div>
    </div> : null

    return <><Grid container spacing={3}>
        {
            props.people?.map((person) => <Grid item key={person.getId()}>
            <Paper>
                <Box p={2} className={props.classes?.item}>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={person.getFullName()} secondary={person.about} />
                </Box>
            </Paper>
          </Grid>)
        }
    </Grid>
    {emptyView}
    </>;
}));
