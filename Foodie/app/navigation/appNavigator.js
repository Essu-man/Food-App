import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from '../screens/splash';
// ...existing code...

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={splashScreen} />
      {/* ...existing code... */}
    </Stack.Navigator>
  );
}