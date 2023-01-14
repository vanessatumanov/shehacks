import React from 'react';
import HomeScreen from './Screens/home';
import SearchScreen from './Screens/search';
import MenuScreen from './Screens/menu';
import ProfileScreen from './Screens/profile';
import CartScreen from './Screens/cart';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

// hello
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />,
    },
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="menu" color={tintColor} />,
    },
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="person" color={tintColor} />,
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: '#30D5C8',
    inactiveTintColor: 'gray',
    style: {
        backgroundColor: 'black',
    },
}

});


const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}