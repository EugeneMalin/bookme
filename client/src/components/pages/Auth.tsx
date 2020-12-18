import { Theme, withStyles, createStyles, Dialog, Button} from '@material-ui/core';
import { useState } from 'react';
import { User as UserForm } from '../forms/User';
import { IAuth } from '../interface/IAuth';
import { MAX_FIELD_WIDTH } from '../Const';
import store from '../../store/store';
import { User } from '../../data/User';
import { addPerson } from '../../store/actionCreators/addPerson';

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
                <UserForm
                    caption='Sign Up'
                    onCommit={(user: User) => {
                        setOpen(false);
                        store.dispatch(addPerson(user.getPerson()))
                    }}
                    onReject={() => {
                        setOpen(false);
                    }}
                />
            </div>
        </Dialog>
    </div>
});
