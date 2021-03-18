import { IBase } from "./Base"
import logo from "../logo.svg";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

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
      logo: {
        height: '10vh',
        width: '10vh',
        marginRight: theme.spacing()
      },
      greeting: {
        alignSelf: 'center'
    },
      action: {
        marginLeft: theme.spacing(),
        textDecoration: 'none'
    },
      actions: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end'
      }
  })
);

export const Header = (props: IHeader) => {
    const classes = useStyles();
    return <header className={`${props.className} ${classes.container}`}>
        <img className={classes.logo} src={logo} alt="ReadMe"/>
        <span className={classes.greeting} >Добро пожаловать!</span>
        <div className={classes.actions}>
            <Button className={classes.action} variant="outlined" onClick={props.onLogIn}>Log in</Button>
            <Button className={classes.action} variant="outlined" onClick={props.onSignUp} color="primary">
                Sign up
            </Button>
        </div>
    </header>
}
