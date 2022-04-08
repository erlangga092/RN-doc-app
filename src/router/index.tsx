import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BottomNavigator } from '../components';
import {
    Chatting,
    ChooseDoctor,
    Doctor,
    GetStarted,
    Hospitals,
    Login,
    Messages,
    Register,
    Splash,
    UploadPhoto,
} from '../pages';

export type RootStackNavigator = {
    Splash: undefined;
    GetStarted: undefined;
    Login: undefined;
    Register: undefined;
    UploadPhoto: undefined;
    MainApp: undefined;
    ChooseDoctor: undefined;
    Doctor: undefined;
    Chatting: undefined;
};

export type RootBottomNavigator = {
    Doctor: undefined;
    Messages: undefined;
    Hospitals: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigator>();
const Tab = createBottomTabNavigator<RootBottomNavigator>();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen
                name="Doctor"
                component={Doctor}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Hospitals"
                component={Hospitals}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChooseDoctor"
                component={ChooseDoctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default Router;
