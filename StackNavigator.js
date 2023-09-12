import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingScreen from './screens/BookingScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen';



const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => focused ? (
              <FontAwesome name="home" size={24} color="#003588" />
            ) : (
              <Feather name="home" size={24} color="black" />
            )
          }}  
        />

        <Tab.Screen
          name='Saved'
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            headerShown: false,
            tabBarIcon: ({focused}) => focused ? (
              <AntDesign name="heart" size={24} color="#003588" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )
          }}  
        />

        <Tab.Screen
          name='Bookings'
          component={BookingScreen}
          options={{
            tabBarLabel: 'Bookings',
            headerShown: false,
            tabBarIcon: ({focused}) => focused ? (
              <Ionicons name="notifications-circle" size={24} color="#003588" />
            ) : (
              <Ionicons name="notifications-circle-outline" size={24} color="black" />
            )
          }}  
        />

        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) => focused ? (
              <Ionicons name="person-circle" size={24} color="#003588" />
            ) : (
              <Ionicons name="person-circle-outline" size={24} color="black" />
            )
          }}  
        />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}}/>
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator