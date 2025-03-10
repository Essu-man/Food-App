import { createStackNavigator } from '@react-navigation/stack';
import NextScreen from '../screens/carousel/NextScreen';
import NextScreen2 from '../screens/carousel/NextScreen2';
import heroScreen from '../screens/hero';
import HomeScreen from '../screens/home';
import loginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import splashScreen from '../screens/splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={splashScreen} />
      <Stack.Screen name="hero" component={heroScreen} />
      <Stack.Screen name="next" component={NextScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="next2" component={NextScreen2} />
      <Stack.Screen name="login" component={loginScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}