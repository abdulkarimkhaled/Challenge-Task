// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import React from 'react'
// import {
//     Platform,
//     View,
// } from 'react-native';
// import Home from '../screens/Home';
// import Transactions from "../screens/Transactions"
// import Profile from '../screens/Profile';
// import { Tabbar } from "../components/Footer/Tabbar";
// import { TabbarAr } from "../components/FooterArabic/TabbarAr";
// import { getAppLanguage } from '../config/Local/localLanguagesController';



// const TabNavigationStack = createBottomTabNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: { header: null, gesturesEnabled: true }
//         },

//         Transactions: {
//             screen: Transactions,
//             navigationOptions: { header: null, gesturesEnabled: true }
//         },

//         Profile: {
//             screen: Profile,
//             navigationOptions: { header: null, gesturesEnabled: true }
//         },
//     },

//     {
//         initialRouteName: 'Home',
//         tabBarComponent: props => getAppLanguage() == "en" ?
//             <Tabbar {...props} index={props.navigation.state.index} />
//             :
//             <TabbarAr {...props} index={props.navigation.state.index} />

//     }
// );

// export default createAppContainer(TabNavigationStack);
