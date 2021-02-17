import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Start from '../screens/Start';
import ContactsScreen from '../screens/ContactsScreen';
import Favorites from '../screens/Favorites';


export type Navigators = "Start" | "ContactsScreen"

const RNApp = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: { headerShown: false, gestureEnabled: true },
    },
    ContactsScreen: {
      screen: ContactsScreen,
      navigationOptions: { headerShown: false, gestureEnabled: true },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: { headerShown: false, gestureEnabled: true }
    }
  },
  {
    initialRouteName: 'Start',
  },
);



export default createAppContainer(RNApp);
