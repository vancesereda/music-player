import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator , withNavigation} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';


// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'library-music'
//       }
//     />
//   ),
// };

// const SearchStack = createStackNavigator({
//   Search: SearchScreen,
// });

// SearchStack.navigationOptions = {
//   tabBarLabel: 'Stream',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'search'}
//     />
//   ),
// };




// export default createBottomTabNavigator({
//   HomeStack,
//   SearchStack,
// },
// {
//   tabBarOptions: {
//     style: {
//       backgroundColor: Colors.darkTheme.tabColor,
//       justifyContent: 'center',
//     }
//   }
// }
// );


export default AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,    // <----
  },
  Search: {
    screen: SearchScreen, // <----
  },
  Settings: {
    screen: SettingsScreen,
  }
},
{
  initialRouteName: 'Home',
})
