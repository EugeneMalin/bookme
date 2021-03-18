import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { useSelector } from "react-redux"
import { IPerson, Person } from "../data/person"
import { IStore } from "../store"
import { IBase } from "./Base"
import { PersonInfo } from "./person/Info"

export interface IContent extends IBase {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    person: {
        height: 150,
        width: 250
    }
  })
);

export const Content = (props: IContent) => {
    const classes = useStyles();
    const persons = useSelector<IStore, IPerson[]>(store => store.persons).map((personDto) => {
        const person = new Person(personDto);
        return <PersonInfo key={person.id} className={classes.person} person={person}/>
    });
    const tabId = useSelector<IStore, string>(store => store.tabId);
    return <main className={classes.wrapper + ' ' + props.className}>
        <h3>{tabId}</h3>
        {persons}
    </main>
}