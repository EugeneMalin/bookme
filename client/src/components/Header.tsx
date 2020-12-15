import { IHeader } from './interface/IHeader';
import logo from '../logo.svg'; // Tell webpack this JS file uses this image
import { Theme, withStyles, createStyles, Box} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    wrapper: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        alignItems: 'baseline'
    },
    icon: {
        marginRight: theme.spacing(1)
    }
});

/**
 * Header application component
 */
export const Header = withStyles(styles)((props: IHeader) => {
    return <header className={props.className}>
        <Box className={props.classes?.wrapper} p={3}>
            <img className={props.classes?.icon} width={32} height={32} src={logo} alt="Logo" /> 
            <h1>Read Me</h1>
        </Box>
    </header>
});
