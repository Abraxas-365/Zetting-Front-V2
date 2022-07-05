import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { store } from "../../stores/redux/index"

const Stack = createStackNavigator();

export type RootStackParamListProject = {
    NewProjectScreen: undefined,
    BuildTeamScreen: undefined,
    SearchActors: undefined,
    HireActors: { userId: string | any }
};
const ProjectStack = () => {
    return (

        <Provider store={store}>
            <Stack.Navigator
                initialRouteName="ScreenNewProject"
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
            </Stack.Navigator>
        </Provider>
    );
};

export default ProjectStack;
