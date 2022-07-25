import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../themes/colors/ZettingColors';
import Search from '../../../assets/svg/search.svg'
import Zetting from '../../../assets/svg/zetting.svg'
import Bell from '../../../assets/svg/bell.svg'
import Profile from '../../../assets/svg/profile.svg'
import Home from '../../../assets/svg/home.svg'
import ScreenFeedHome from '../../screens/feed/home/ScreenFeedHome';
import ScreenExploreHome from '../../screens/explore/home/ScreenExploreHome';
import ScreenNotificationHome from '../../screens/notification/home/ScreenNotificationHome';
import ScreenProfileHome from '../../screens/profile/home/ScreenProfileHome';
import ScreenProjectHome from '../../screens/project/home/ScreenProjectHome';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.orange,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopWidth: 0, backgroundColor: COLORS.blue, borderTopColor: COLORS.white, borderWidth: 0 },
            }}
            initialRouteName='Feed' >

            <Tab.Screen name="Feed" component={ScreenFeedHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Home fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Explore" component={ScreenExploreHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Search fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Project" component={ScreenProjectHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Zetting fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />


            <Tab.Screen name="Notification" component={ScreenNotificationHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Bell fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ScreenProfileHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Profile fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
