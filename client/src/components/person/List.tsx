import { createStyles, makeStyles, Theme } from "@material-ui/core"
import { useSelector } from "react-redux"
import { IPerson, Person } from "../../data/person";
import { IStore } from "../../store";
import { PersonInfo } from "./Info";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export const PesronList = () => {
    const classes = useStyles();
    const persons = useSelector<IStore, IPerson[]>(store => store.persons).map((personDto) => {
        const person = new Person(personDto);
        return <PersonInfo key={person.id} className={classes.person} person={person}/>
    });
    return <div className={classes.persons}>
        {persons}
    </div>
}