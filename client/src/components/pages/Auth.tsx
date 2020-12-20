import { Theme, withStyles, createStyles, Dialog, Button, TextField} from '@material-ui/core';
import { useState } from 'react';
import { User as UserForm } from '../forms/User';
import { IAuth } from '../interface/IAuth';
import { LOGIN_FIELDS, MAX_FIELD_WIDTH, MIN_LOGIN_SIZE, MIN_PASSWORD_SIZE } from '../Const';
import store from '../../store/store';
import { User } from '../../data/User';
import { addPerson } from '../../store/actionCreators/addPerson';
import red from '@material-ui/core/colors/red';
import { IAuthInput } from '../interface/IAuthInput';
import { IAuthError } from '../interface/IAuthError';
import { readUser } from '../../data/UserDao';
import { loginUser } from '../../store/actionCreators/loginUser';

const styles = (theme: Theme) => createStyles({
    fieldsWrapper: {
        display: 'flex',
        maxWidth: MAX_FIELD_WIDTH,
        flexDirection: 'column',
        margin: '0 auto'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        width: 100,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1)
    },
    field: {
        marginBottom: theme.spacing(1)
    },
    errorBag: {
        color: red[600]
    }
});

function isValid(input: IAuthInput): [boolean, IAuthError] {
    const validation: IAuthError = {};
    let result = true;

    if (!(input['email'] || input['login'])) {
        validation['login'] = 'Login or email is required.';
        validation['email'] = 'Email or login is required.';
        result = false;
    }

    if (!input['password']) {
        validation['password'] = 'Password is required.';
        result = false;
    }
    
    if ((!validation['email'] && validation['login']) && !input['email']) {
        validation['email'] = 'Email is required.';
        result = false;
    }
    
    if ((!validation['login'] && validation['email']) && !input['login']) {
        validation['login'] = 'Login is required.';
        result = false;
    }

    if (!validation['password'] && input.password && input.password.length < MIN_PASSWORD_SIZE - 1) {
        validation['password'] = 'Your password is too short.'
        result = false;
    }

    if (!validation['login'] && input.login && input.login.length < MIN_LOGIN_SIZE - 1) {
        validation['login'] = `${input.login} is short login. Add ${MIN_LOGIN_SIZE - input.login.length} symbols.`
        result = false;
    }
    return [result, validation];
}

const LinkButton = withStyles({
    root: {
        textDecoration: 'inherit'
    }
})(Button);

export const Auth = withStyles(styles)((props: IAuth) => {
    const [open, setOpen] = useState(false);
    const [problem, setServiceProblem] = useState<string>('');
    const [values, setValues] = useState<IAuthInput>({
        password: '',
        login: '',
        email: ''
    });
    const [errors, setErrors] = useState<IAuthError>({});

    const handleChange = (prop: keyof IAuthInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const serverProblemMark = problem ? <div className={`${props.classes?.field} ${props.classes?.errorBag}`}>{problem}</div> : null;

    return <div className={props.classes?.fieldsWrapper}>
        {LOGIN_FIELDS.map(field => (
            <TextField 
                key={field.field}
                className={props.classes?.field}
                value={values[field.field]}
                error={!!errors[field.field]}
                type={field.type}
                label={field.label}
                required={field.required}
                helperText={errors[field.field] || field.helper}
                onChange={handleChange(field.field)} 
            />
        ))}

        {serverProblemMark}

        <div className={props.classes?.buttons}>
            <Button className={props.classes?.button} variant="contained" color="primary" onClick={ () => {
                const [valid, validation] = isValid(values)
                if (!valid) {
                    setErrors({...validation})
                    return;
                }
                setErrors({});
                readUser(
                    values?.login || '',
                    values?.email || '',
                    values?.password || ''
                ).then((user) => {
                    store.dispatch(loginUser(user));
                }).catch((reason) => {
                    setServiceProblem(reason);
                });
            }}>Enter</Button>
        </div>

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
