import { IHeader } from './interface/IHeader';
import logo from '../logo.svg'; // Tell webpack this JS file uses this image
import { Theme, withStyles, createStyles, Box, IconButton, Dialog} from '@material-ui/core';
import {
    MeetingRoom as MeetingRoomIcon,
    Person as PersonIcon
} from '@material-ui/icons';
import { connect } from 'react-redux';
import { IStore } from '../data/interface/IStore';
import { useState } from 'react';
import { Auth as AuthForm } from './forms/Auth';
import { User as UserForm } from './forms/User';
import { MAX_FIELD_WIDTH } from './Const';

const styles = (theme: Theme) => createStyles({
    wrapper: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    header: {
        display: 'flex',
        alignItems: 'baseline'
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    fieldsWrapper: {
        display: 'flex',
        width: MAX_FIELD_WIDTH,
        flexDirection: 'column',
        margin: '0 auto'
    },
});

/**
 * Header application component
 */
const StyledHeader = withStyles(styles)((props: IHeader) => {
    const Icon = props.user ? PersonIcon : MeetingRoomIcon;
    const form = props.user ? <><UserForm caption='Profile' user={props.user} onCommit={(user) => {
        setOpen(false);
    }} onReject={() => {
        setOpen(false);
    }}/></> : <AuthForm onCommit={(user) => {
        setOpen(false);
    }}  onReject={() => {
        setOpen(false);
    }}/>;
    const [open, setOpen] = useState(false);
    const exit = props.user ? <IconButton onClick={() => {
        if (!props.user) {
            return;
        }
    }}><MeetingRoomIcon/></IconButton> : null;

    return <header className={`${props.className} ${props.classes?.header}`}>
        <Box className={props.classes?.wrapper} p={3}>
            <div className={props.classes?.header}>
                <img className={props.classes?.icon} width={32} height={32} src={logo} alt="Logo" /> 
                <h1>Read Me</h1>
            </div>

            <div>
                {exit}
                <IconButton onClick={() => {
                    setOpen(true);
                }}><Icon/></IconButton>
            </div>
        </Box>
        
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
            <div className={props.classes?.fieldsWrapper}>
                {form}
            </div>
        </Dialog>
    </header>
});

export const Header = connect((store: IStore) => ({
    user: store.user
}))(StyledHeader);
