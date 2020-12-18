import { Theme, withStyles, createStyles } from '@material-ui/core';
import { IUser } from '../../data/interface/IUser';
import { User } from '../forms/User';
import { IAuth } from '../interface/IAuth';

const styles = (theme: Theme) => createStyles({
    fieldsWrapper: {
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        margin: '0 auto'
    }
});

export const Auth = withStyles(styles)((props: IAuth) => {
    return <div className={props.classes?.fieldsWrapper}>
        <User
            onCommit={(user: IUser) => {
                console.log(user)
            }}
            onReject={() => {

            }}
        />
    </div>
});