import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, createStyles, IconButton, makeStyles, Theme, Button, TextField, FormControl, InputLabel, Input, InputAdornment } from "@material-ui/core"
import { red } from "@material-ui/core/colors";
import { ExpandMore, Visibility, VisibilityOff } from "@material-ui/icons"
import { ChangeEvent, useState } from "react";
import clsx from 'clsx';
import { IUser, User } from "../../data/user";

interface IUserEditor {
    user?: User;
    onSave: (user: IUserData) => void;
    onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: theme.spacing()
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    action: {
      marginRight: theme.spacing()
    },
    changePassword: {
        marginTop: theme.spacing()
    }
  }),
);

interface IUserData extends IUser {
    password: string
}

export const UserEditor = ({user, onSave, onClose}: IUserEditor) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [showPassword, setPasswordVisibility] = useState(false);
    const [editingUser, setUser] = useState<IUserData>({
        id: -1,
        name: '',
        login: '',
        email: '',
        password: '',
        ...user
    });

    const handleChange = (field: keyof IUserData) => (event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...editingUser,
            [field]: event.target.value
        })
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <Card className={classes.root}>
        <CardHeader
            avatar={
                user ? <Avatar className={classes.avatar} alt={user.getFullName()} variant="rounded">{user?.getFirstChars()}</Avatar> : null
            }
            title={user?.getFullName()||'New user creation'}
            subheader={user?.createdAt?.toDateString()||new Date().toDateString()}
        />
        <CardContent>
            <TextField fullWidth value={editingUser.name} onChange={handleChange('name')} id="name-field" label="Name" />
            <TextField fullWidth value={editingUser.surname} onChange={handleChange('surname')} id="surname-field" label="Surname" />
            <TextField fullWidth value={editingUser.patronymic} onChange={handleChange('patronymic')} id="patronymic-field" label="Patronymic" />
            <TextField fullWidth disabled={!!user} value={editingUser.login} onChange={handleChange('login')} id="login-field" label="Login" />
            <TextField fullWidth disabled={!!user} value={editingUser.email} onChange={handleChange('email')} id="email-field" label="Email" />
            { !!user ? <div className={classes.changePassword}>
                Тут будет переход на смену пароля/email/login :)
            </div> : <FormControl fullWidth>
                <InputLabel htmlFor="password-field">Password</InputLabel>
                <Input
                    id="password-field"
                    type={showPassword ? 'text' : 'password'}
                    value={editingUser.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        !!user ? null :
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                    setPasswordVisibility(!showPassword);
                                }}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>}
        </CardContent>
        <CardActions disableSpacing>
            <Button className={classes.action} onClick={() => {
                onSave(editingUser);
            }} variant="contained" color="primary">Save</Button>
            <Button className={classes.action} onClick={() => {
                onClose();
            }} variant="contained">Close</Button>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMore />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <TextField
                    fullWidth
                    id="bio-field"
                    label="Description"
                    multiline
                    value={editingUser.bio}
                    onChange={handleChange('bio')}
                />
            </CardContent>
        </Collapse>
    </Card>
}
