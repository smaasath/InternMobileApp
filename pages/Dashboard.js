import { StyleSheet,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './Settings';









export default function Dashboard() {

  const Tab = createBottomTabNavigator();




  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={{ uri: "https://img.icons8.com/ios-filled/50/home.png" }} style={{ height: focused ? 30 : 25, width: focused ? 30 : 25, tintColor: focused ? '#115dbf' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={{ uri: "https://img.icons8.com/ios-filled/50/apple-settings.png"}} style={{ height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#115dbf' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
      </Tab.Navigator>




    </>

  )
}

const styles = StyleSheet.create({})