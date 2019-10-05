import { createStackNavigator, createAppContainer } from 'react-navigation';
import PhoneConfirmScreen from '../Containers/PhoneConfirmScreen';
import PhoneSignInScreen from '../Containers/PhoneSignInScreen';
import HomeScreen from '../Containers/HomeScreen';
import SignUpScreen from '../Containers/SignUpScreen';
import SignInScreen from '../Containers/SignInScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    PhoneConfirmScreen: { screen: PhoneConfirmScreen },
    PhoneSignInScreen: { screen: PhoneSignInScreen },
    HomeScreen: { screen: HomeScreen },
    SignUpScreen: { screen: SignUpScreen },
    SignInScreen: { screen: SignInScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SignInScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
