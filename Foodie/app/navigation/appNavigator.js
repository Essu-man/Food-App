import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from '../screens/splash';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={splashScreen} />
    </Stack.Navigator>
  );
}