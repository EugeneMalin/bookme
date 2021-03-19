import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { useSelector } from "react-redux"
import { BOOKS_TAB_ID, PEOPLE_TAB_ID } from "../const"
import { User } from "../data/user"
import { IStore } from "../store"
import { IBase } from "./Base"
import { PesronList } from "./person/List"
import { UserForm } from "./user/Form"

export interface IContent extends IBase {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    persons: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(0.5)
    },
    person: {
        height: 150,
        width: 250
    }
  })
);

function getContentById(tabId: string) {
    switch(tabId) {
        case PEOPLE_TAB_ID:
            return <PesronList/>;
        case BOOKS_TAB_ID: 
            return <div>
                <UserForm/>
                <UserForm user={new User({
                    id: 1,
                    name: 'Name',
                    surname: 'Surname',
                    login: 'string',
                    email: 'string@sd.sdsd',
                    createdAt: new Date(2000, 10, 10),
                    bio: 'Testign Test'
                })}/>
            </div>
        default: 
            return <div>
                Sorry! We are stil working for this page!
            </div>
    }
}

export const Content = (props: IContent) => {
    const classes = useStyles();
    const tabId = useSelector<IStore, string>(store => store.tabId);
    
    return <main className={classes.wrapper + ' ' + props.className}>
        {getContentById(tabId)}
    </main>
}