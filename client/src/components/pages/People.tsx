import { IStore } from "../../data/interface/IStore";
import { Theme, withStyles, createStyles, GridList, ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';
import { connect } from "react-redux";
import { IPeople } from "../interface/IPeople";
import { Person as PersonIcon} from '@material-ui/icons';


const styles = (theme: Theme) => createStyles({
    empty: {
        display: 'flex',
        justifyContent: 'center'
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

    return <><GridList cellHeight={100}>
        {
            props.people?.map((person) => <ListItem key={person.getId()}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={person.getFullName()} secondary={person.about} />
          </ListItem>)
        }
    </GridList>
    {emptyView}
    </>;
}));
