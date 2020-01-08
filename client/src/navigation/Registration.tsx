import { createStackNavigator } from 'react-navigation-stack';

import {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
} from '../screens';

export default createStackNavigator(
    {
        HomeScreen,
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        Dashboard,
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none',
    }
);
