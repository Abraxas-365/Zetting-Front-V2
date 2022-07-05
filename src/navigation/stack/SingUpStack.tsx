import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenGetStarted from '../../screens/autentication/getStarted/ScreenGetStarted';

const Stack = createStackNavigator();

export type RootStackParamList = {
};
const SignUpStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ScreenWellcome"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name='WellcomScreen' options={{ title: "WellcomScreen" }} component={ScreenGetStarted} />
        </Stack.Navigator>
    );
};

export default SignUpStack;
