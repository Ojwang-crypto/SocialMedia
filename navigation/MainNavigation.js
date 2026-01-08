import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profiles/profile';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      // initialRouteName="Route.Home"
    >
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
