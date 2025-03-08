import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/carousel/HomeScreen';
import NextScreen from '../screens/carousel/NextScreen';
import heroScreen from '../screens/hero';
import splashScreen from '../screens/splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={splashScreen} />
      <Stack.Screen name="hero" component={heroScreen} />
      <Stack.Screen name="next" component={NextScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}