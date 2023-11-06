import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Card from './pages/Card';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
});
