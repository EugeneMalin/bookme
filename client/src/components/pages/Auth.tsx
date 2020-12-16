import { FormControl, InputLabel, Input, FormHelperText, InputAdornment, IconButton, Theme, withStyles, createStyles } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';
import { IUser } from '../../data/interface/IUser';
import { IAuth } from '../interface/IAuth';

const styles = (theme: Theme) => createStyles({
    fieldsWrapper: {
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        margin: '0 auto'
    }
});

interface IUserFields extends IUser {
    showPassword: boolean;
}

export const Auth = withStyles(styles)((props: IAuth) => {
    const [values, setValues] = useState<IUserFields>({
        password: '',
        login: '',
        email: '',
        name: '',
        surname: '',
        patronymic: '',
        gender: undefined,
        about: '',
        showPassword: false,
    });

    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return <div className={props.classes?.fieldsWrapper}>
        <FormControl>
            <InputLabel required htmlFor="name-input">Name</InputLabel>
            <Input required id="name-input" aria-describedby="name-helper-text" />
            <FormHelperText id="name-helper-text">Your first name.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel required htmlFor="surname-input">Surname</InputLabel>
            <Input required id="surname-input" aria-describedby="surname-helper-text" />
            <FormHelperText id="surname-helper-text">Your second name.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="patronymic-input">Patronymic</InputLabel>
            <Input id="patronymic-input" aria-describedby="patronymic-helper-text" />
        </FormControl>
        <FormControl>
            <InputLabel required htmlFor="email-input">Email address</InputLabel>
            <Input id="email-input" aria-describedby="email-helper-text" />
            <FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="login-input">Login</InputLabel>
            <Input id="login-input" aria-describedby="login-helper-text" />
            <FormHelperText id="login-helper-text">It should contain number and upper and lower case letter. Required length is 6 symbols.</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel required htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </div>
});