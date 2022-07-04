import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from '../../stores/context/auth/AuthContext';
import BottomTabs from '../bottonTabs/HomeBottomTabs';
import ProjectStack from '../stack/ProjectStack';
import SignUpStack from '../stack/SingUpStack';

const Stack = createStackNavigator();
export type MainStackParamList = {
    SingnUp: undefined,
    HomeScreen: undefined,
    NewProjectStack: undefined,
};
const MainNavigator = () => {

    const { status, userId } = useContext(AuthContext);
    console.log("status", status);
    return (
        <NavigationContainer>
            <Stack.Navigator
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

                {status != 'autenticated' ?
                    <>
                        <Stack.Screen name='SignUp' options={{ title: "SignUp" }} component={SignUpStack} />
                    </>

                    :
                    <>
                        <Stack.Screen name='HomeScreen' options={{ title: "HomeScreen" }} component={BottomTabs} />
                        <Stack.Screen name='NewProjectStack' options={{ title: "NewProjectStack" }} component={ProjectStack} />
                    </>

                }

            </Stack.Navigator>

        </NavigationContainer>
    );
};


export default MainNavigator;
