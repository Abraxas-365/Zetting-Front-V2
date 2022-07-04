import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNewProject from '../../screens/project/createProject/newProject/ScreenNewProject';
import ScreenBuildTeam from '../../screens/project/createProject/buildTeam/ScreenBuildTeam';
import ScreenSearchForActors from '../../screens/project/findArtists/serchForActors/ScreenSearchForActors';
import ScreenHireActor from '../../screens/workers/actor/HireWorker/ScreenHireActor';
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
                <Stack.Screen name='NewProjectScreen' options={{ title: "NewProjectScreen" }} component={ScreenNewProject} />
                <Stack.Screen name='BuildTeamScreen' options={{ title: "BuildTeamScreen" }} component={ScreenBuildTeam} />
                <Stack.Screen name='SearchActors' options={{ title: "SearchActors" }} component={ScreenSearchForActors} />
                <Stack.Screen name='HireActors' options={{ title: "HireActors" }} component={ScreenHireActor} />
            </Stack.Navigator>
        </Provider>
    );
};

export default ProjectStack;
