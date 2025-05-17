import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList } from '../types';
import CarouselScreen from '../screens/CarouselScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import Search from '../screens/Search';
import Saved from '../screens/Saved';
import Messages from '../screens/Messages';
import useTheme from '../theme/useTheme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const iconNames: Record<string, keyof typeof Ionicons["glyphMap"]> = {
  index: "home",
  Saved: "heart",
  Messages: "chatbox",
  Search: "search",
  Profile: "person",
};

function HomeTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          return (
            <Ionicons
              name={iconNames[route.name]}
              size={24}
              color={color}
              style={{ flex: 1, justifyContent: 'center' }}
            />
          );
        },
        tabBarLabel: () => null,
        tabBarInactiveTintColor: theme.tabInactive,
        tabBarActiveTintColor: theme.tabActive,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderRadius: 30,
          position: "absolute",
          marginLeft: 10,
          marginRight: 10,
          bottom: 20,
          height: 50,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          flex: 1
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbox" size={24} color={color} />
            ),
          }}
        />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Carousel"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}