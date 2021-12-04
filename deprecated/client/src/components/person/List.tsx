import { Card, CardContent, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
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
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    empty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30vh',
        width: '40vw'
    }
  })
);

export const PesronList = () => {
    const classes = useStyles();
    const persons = useSelector<IStore, IPerson[]>(store => store.persons).map((personDto) => {
        const person = new Person(personDto);
        return <PersonInfo key={person.id} className={classes.person} person={person}/>
    });
    return persons.length ? <div className={classes.persons}>{persons}</div> : <div className={classes.container}>
            <Card className={classes.empty}>
                <CardContent>
                    <Typography>There are no people here!</Typography>
                </CardContent>
            </Card>    
        </div>}