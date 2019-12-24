import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth';
import AppNavigator from './app';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
