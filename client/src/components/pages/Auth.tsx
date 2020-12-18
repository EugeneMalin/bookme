import { Theme, withStyles, createStyles, Dialog, Button
} from '@material-ui/core';
import { forwardRef, useState } from 'react';
import { IUser } from '../../data/interface/IUser';
import { User } from '../forms/User';
import { IAuth } from '../interface/IAuth';
import { MAX_FIELD_WIDTH } from '../Const';

const styles = (theme: Theme) => createStyles({
    fieldsWrapper: {
        display: 'flex',
        maxWidth: MAX_FIELD_WIDTH,
        flexDirection: 'column',
        margin: '0 auto'
    }
});

const LinkButton = withStyles({
    root: {
        textDecoration: 'inherit'
    }
})(Button);

export const Auth = withStyles(styles)((props: IAuth) => {
    const [open, setOpen] = useState(false);

    return <div className={props.classes?.fieldsWrapper}>
        <div>
            If you have no account just 
            <LinkButton color="primary" onClick={() => setOpen(true)}>sign up</LinkButton>
        </div>

        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
            <div className={props.classes?.fieldsWrapper}>
                <User
                    onCommit={(user: IUser) => {
                        console.log(user);
                        setOpen(false);
                    }}
                    onReject={() => {
                        setOpen(false);
                    }}
                />
            </div>
        </Dialog>
    </div>
});
