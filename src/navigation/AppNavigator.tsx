import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabParamList, CreateListingStackParamList } from '../types';
import CarouselScreen from '../screens/CarouselScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThemeSelectionScreen from '../screens/ThemeSelectionScreen';
import { Ionicons } from '@expo/vector-icons';
import SearchMapScreen from '../screens/SearchMapScreen';

import FavoriteScreen from '../screens/FavoriteScreen';
import Messages from '../screens/Messages';
import FilterScreen from '../screens/FilterScreen';
import MessageDetailsScreen from '../screens/MessageDetailsScreen';
import SearchListScreen from '../screens/SearchListScreen';
import { useTheme } from '../contexts/ThemeContext';
import CreateListingScreen from '../screens/CreateListingScreen';
import SelectCategoryScreen from '../screens/SelectCategoryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const CreateListingStack = createNativeStackNavigator<CreateListingStackParamList>();

const iconNames: Record<string, keyof typeof Ionicons["glyphMap"]> = {
  index: "home",
  Saved: "heart",
  Messages: "chatbox",
  Search: "search",
  CreateListingTab: "add-circle",
  Profile: "person",
};

function CreateListingStackScreen() {
  return (
    <CreateListingStack.Navigator screenOptions={{ headerShown: false }}>
      <CreateListingStack.Screen name="SelectCategory" component={SelectCategoryScreen} />
      <CreateListingStack.Screen name="CreateListing" component={CreateListingScreen} />
    </CreateListingStack.Navigator>
  );
}

function HomeTabs() {
  const colors = useTheme();

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
        tabBarInactiveTintColor: colors.text,
        tabBarActiveTintColor: colors.buttonText,
        tabBarStyle: {
          backgroundColor: colors.button,
          borderRadius: 30,
          position: "absolute",
          marginLeft: 10,
          marginRight: 10,
          bottom: 20,
          height: 50,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          flex: 1
        },
      })}>
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
        component={SearchMapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="CreateListingTab"
        component={CreateListingStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            // Reset the stack to the first screen (SelectCategoryScreen)
            navigation.navigate('CreateListingTab', { screen: 'SelectCategory' });
          },
        })}
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

export default function AppNavigator({ initialRouteName = 'Carousel' }) {
  const colors = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: true, title: 'Recuperar Senha' }} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} options={{ headerShown: true, title: 'Detalhes do Imóvel' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true, title: 'Configurações' }} />
      <Stack.Screen 
        name="ThemeSelection" 
        component={ThemeSelectionScreen} 
        options={{
          headerShown: true,
          title: 'Tema',
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen 
        name="Filter" 
        component={FilterScreen} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="SearchList" 
        component={SearchListScreen} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="MessageDetails" 
        component={MessageDetailsScreen} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}