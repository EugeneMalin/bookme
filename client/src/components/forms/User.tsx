import { Button, TextField, Theme, withStyles, createStyles, Box } from '@material-ui/core';
import { useState } from 'react';
import { isValidEmail } from '../../data/Helpers';
import { ERRORS, MIN_LOGIN_SIZE, MIN_PASSWORD_SIZE, USER_FIELDS } from '../Const';
import { IUserErrors } from '../interface/IUserErrors';
import { IUserForm } from '../interface/IUserForm';
import { IUserInput } from '../interface/IUserInput';
import red from '@material-ui/core/colors/red';
import { createUser } from '../../data/Network';

const styles = (theme: Theme) => createStyles({
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

/**
 * Gets validation for user
 * @param userTemplate draft user
 */
export function isValid(userTemplate: IUserInput): [boolean, IUserErrors] {
    const validation: IUserErrors = {};
    let result = true;
    
    //Check for required fields
    USER_FIELDS.filter(field => field.required).forEach((field) => {
        if (!userTemplate[field.field]) {
            //@ts-ignore
            validation[field.field] = `${field.label} is required.`;
            result = false;
        }
    })

    if (!validation['login'] && userTemplate.login && userTemplate.login.length < MIN_LOGIN_SIZE - 1) {
        validation['login'] = `${userTemplate.login} is short login. Add ${MIN_LOGIN_SIZE - userTemplate.login.length} symbols.`
        result = false;
    }

    if (!validation['email'] && userTemplate.email && !isValidEmail(userTemplate.email)) {
        validation['email'] = `${userTemplate.email} is not valid email address.`
        result = false;
    }

    if (!validation['password'] && userTemplate.password && userTemplate.password?.length < MIN_PASSWORD_SIZE - 1) {
        validation['password'] = 'Your password is too short.'
        result = false;
    }

    if (!validation['password'] && !validation['rPassword'] && userTemplate.password !== userTemplate.rPassword) {
        validation['rPassword'] = 'It is not match password.'
        result = false;
    }

    return [result, validation];
}

/**
 * User editing form
 */
export const User = withStyles(styles)((props: IUserForm) => {
    const [values, setValues] = useState<IUserInput>({
        password: 'qwertyuiop',
        rPassword: props.user?.password || 'qwertyuiop',
        login: 'qwertyuiop',
        email: 'qwertyuiop@gfh.jh',
        ...props.user
    });

    const [serverProblem, setServiceProblem] = useState<string>('');

    const [errors, setErrors] = useState<IUserErrors>({});

    const handleChange = (prop: keyof IUserInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const serverProblemMark = serverProblem ? <div className={`${props.classes?.field} ${props.classes?.errorBag}`}>{serverProblem}</div> : null;

    return <>
        <Box>
            <h2>{props.caption}</h2>
        </Box>
        {USER_FIELDS.map(field => (
            <TextField 
                key={field.field}
                className={props.classes?.field}
                error={!!errors[field.field]}
                value={values[field.field]}
                type={field.type}
                label={field.label}
                required={field.required}
                onChange={handleChange(field.field)} 
                helperText={errors[field.field] || field.helper}
            />
        ))}

        {serverProblemMark}

        <div className={props.classes?.buttons}>
            <Button className={props.classes?.button} variant="contained" onClick={ () => {
                props.onAction(false);
            }}>Cancel</Button>
            <Button className={props.classes?.button} variant="contained" color="primary" onClick={ () => {
                const [valid, validation] = isValid(values);

                if (!valid) {
                    setErrors({...validation})
                    return;
                }
                setErrors({})

                if (!values.login || !values.password || !values.email) {
                    setServiceProblem("Please, try again, something's gone wrong!")
                }
                createUser({
                    login: values.login || '',
                    password: values.password || '',
                    email: values.email || ''
                }).then(res => {
                    if (res) {
                        setServiceProblem(res.message);
                        if (res.code === ERRORS.LOGIN_IS_NOT_UNIQUE) {
                            setErrors({
                                login: 'Is not unique.'
                            })
                        }
                        if (res.code === ERRORS.EMAIL_IS_NOT_UNIQUE) {
                            setErrors({
                                email: 'Is not unique.'
                            })
                        }
                        if (res.code === ERRORS.LOGIN_AND_EMAIL_IS_NOT_UNIQUE) {
                            setErrors({
                                login: 'Is not unique.',
                                email: 'Is not unique.'
                            })
                        }
                        return;
                    }
                    props.onAction(true);
                })
            }}>
                {props.user ? 'Save' : 'Create' }
            </Button>
        </div>
    </>
});