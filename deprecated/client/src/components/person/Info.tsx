import { Avatar, Card, CardContent, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Person } from "../../data/person";
import { IBase } from "../Base";

interface IPersonInfo extends IBase {
    person: Person;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            margin: theme.spacing(0.5),
            overflow: 'hidden'
        },
        content: {
            maxWidth: '100%'
        },
        avatar: {
            display: 'flex',
            marginBottom: theme.spacing(0.2)
        },
        name: {
            padding: `${theme.spacing(0.5)}px ${theme.spacing(0.5)}px 0 ${theme.spacing(0.5)}px`,
            fontSize: 32
        },
        bio: {
            color: theme.palette.grey[600],
            maxWidth: '100%',
            textOverflow: 'ellipsis',
        }
    })
)

export const PersonInfo = ({person, className}: IPersonInfo) => {
    const classes = useStyles()

    return <Card className={classes.container + ' ' + className} variant="outlined">
        <CardContent className={classes.content}>
            <div className={classes.avatar}>
                <Avatar alt={person.getFullName()} variant="rounded">{person.getFirstChars()}</Avatar>
                <span className={classes.name}>
                    {person.getFullName()}
                </span>
            </div>
            <span className={classes.bio}>{person.bio}</span>
        </CardContent>
    </Card>
}