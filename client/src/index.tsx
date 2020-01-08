import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Registration from './navigation/Registration'

export default createAppContainer(createSwitchNavigator({
  Registration
}, {
  initialRouteName: 'Registration',
}));
