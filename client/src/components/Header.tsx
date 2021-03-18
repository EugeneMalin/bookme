import { IBase } from "./Base"
import logo from "../logo.svg";
import { Button, createStyles, makeStyles, Paper, PropTypes, Theme } from "@material-ui/core";
import { ReactNode } from "react";

export interface IHeader extends IBase {
    //todo create user class
    user?: any;
    
    onLogIn: () => void;
    onSignUp: () => void;
    onLogOut: () => void;
    onReadNotifications: () => void;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      container: {
        display: 'flex'
    },
    paper: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
      logo: {
        height: '10vh',
        width: '10vh',
        marginRight: theme.spacing(),
        padding: theme.spacing(1)
      },
      greeting: {
        alignSelf: 'center'
    },
      action: {
        marginLeft: theme.spacing(),
        textDecoration: 'none',
        width: '100px'
    },
      actions: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end'
      }
  })
);

interface IActionParams {
    className: string;
    action: () => void;
    color?: PropTypes.Color;
    caption: string;
}

function getActionButton({caption, className, action, color}: IActionParams): ReactNode {
    return <Button className={className} onClick={action} color={color}>{caption}</Button>;
}

export const Header = (props: IHeader) => {
    const classes = useStyles();
    const loginBtn = getActionButton({className: classes.action, action: props.onLogIn, caption: 'Log in'});
    const signupBtn = getActionButton({className: classes.action, action: props.onSignUp, caption: 'Sign up', color: 'primary'});
    const logOutBtn = getActionButton({className: classes.action, action: props.onLogOut, caption: 'Log out'});
    // todo create notifications center
    //const notificationsBtn = getActionButton({className: classes.action, action: props.onReadNotifications, caption: 'Read me'});
    return <header className={`${props.className} ${classes.container}`}>
      <Paper className={classes.paper} elevation={0}>
        <img className={classes.logo} src={logo} alt="ReadMe"/>
        <span className={classes.greeting}>Welcome{props.user?.name ? `, ${props.user?.name}!`: '!'}</span>
        <div className={classes.actions}>
            {props.user ? logOutBtn : loginBtn}
            {props.user ? null : signupBtn}
        </div>
      </Paper>
    </header>
}
