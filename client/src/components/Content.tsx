import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import actions from "../actions"
import { PEOPLE_TAB_ID } from "../const"
import { IPerson } from "../data/person"
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
        default: 
            return <div>
                Sorry! We are stil working for this page!
            </div>
    }
}

export const Content = (props: IContent) => {
    const classes = useStyles();
    const tabId = useSelector<IStore, string>(store => store.tabId);
    const [oneUser, setOneUser] = useState(new User({
        id: 1,
        name: 'Name',
        surname: 'Surname',
        login: 'string',
        email: 'string@sd.sdsd',
        createdAt: new Date(2000, 10, 10),
        bio: 'Testign Test'
    }))
    
    const dispatch = useDispatch();
    const persons = useSelector<IStore, IPerson[]>(store => store.persons)
    
    return <main className={classes.wrapper + ' ' + props.className}>
        {getContentById(tabId)}
        <div>
            <UserForm
                onSave={(user) => {
                    dispatch(actions.persons.add({
                        id: persons.length + 1,
                        name: user.name,
                        surname: user.surname,
                        patronymic: user.patronymic,
                        bio: user.bio,
                        createdAt: user.createdAt
                        }));
                }}
                onClose={() => {

                }}
            />
            <UserForm 
                user={oneUser}
                
                onSave={(user) => {
                    setOneUser(new User(user));
                }}
                onClose={() => {
                    setOneUser(oneUser);
                }}
            />
        </div>
    </main>
}