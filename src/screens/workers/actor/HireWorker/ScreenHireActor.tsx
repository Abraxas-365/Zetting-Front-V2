import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { StretchyScrollView } from 'react-native-stretchy';
import { useDispatch, useSelector } from 'react-redux';
import { serveDefaultImages } from '../../../../api/apiCalls';
import BlackBoxButton from '../../../../components/Buttons/BlackBoxButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ActorSchemaContainer from '../../../../functionalities/artists/actors/container/schemas/ActorSchema/ActorSchemaContainer';
import BlackInfoButtonProject from '../../../../functionalities/projects/containers/buttons/BlackInfoButton/BlackInfoButton';
import { useGetUser } from '../../../../functionalities/user/hooks/useGetUser';
import { RootStackParamListProject } from '../../../../navigation/stack/ProjectStack';
import { COLORS } from '../../../../themes/colors/ZettingColors';
import { styleBackground, styleWrappers } from '../../../../themes/styles';
import { styles } from './style';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../stores/redux';
import { AuthContext } from '../../../../stores/context/auth/AuthContext';
import { addWorker } from '../../../../functionalities/workRequest/apiCalls/addWorker';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../../../navigation/main/mainNavigator';
type Props = NativeStackScreenProps<RootStackParamListProject, 'HireActors'>;
const ScreenHireActor = ({ route }: Props) => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const { token } = useContext(AuthContext)
    const { userId } = route.params
    const projectId = useSelector((state: any) => state.projectId)
    const { isLoadingUser, user } = useGetUser(userId)
    var AvatarImage = require('../../../../../assets/noAvatar.jpeg')
    isLoadingUser ?
        AvatarImage = AvatarImage
        :
        AvatarImage = { uri: serveDefaultImages + '/luisf.jpeg' }

    const dispatch = useDispatch();
    const { cleanProjectId } = bindActionCreators(actionCreators, dispatch);

    return (

        <View style={styleBackground.darkBackground}>
            <StretchyScrollView
                image={AvatarImage}
            >

                <View style={styleBackground.darkBackground}>
                    <View style={[styleWrappers.frameWrapper, { marginTop: '4%' }]}>

                        {/*Header for name, profession and perfil percentaje*/}
                        <View style={styles.header}>

                            {/*name and prifession*/}
                            <View style={styles.nameNprofession}>
                                <Text style={styles.nameText}>{user.name}</Text>
                                <Text style={styles.professionText}>{user.profession}</Text>
                            </View>
                            <CustomButton
                                text='Add'
                                styleContainer={{
                                    backgroundColor: COLORS.orange,
                                    width: 78,
                                    borderWidth: 0,
                                    position: 'absolute',
                                    right: 0,
                                    top: 10,
                                }}
                                styleText={{ color: COLORS.white, padding: 5, fontSize: 15, alignSelf: 'center' }}
                                onPress={() => {
                                    try {
                                        addWorker(projectId, userId, token)
                                        cleanProjectId()
                                        navigation.dispatch(
                                            CommonActions.reset({
                                                index: 0,
                                                routes: [{ name: 'HomeScreen' }
                                                ]

                                            })
                                        )
                                    } catch (err) {
                                        console.log(err)
                                    }
                                }}

                            />

                        </View>

                        {/*blackBoxButtons*/}
                        <View style={styles.blackBoxButtonsView}>
                            <BlackInfoButtonProject />
                            <BlackBoxButton text1="-" text2="Comments" style={{ marginLeft: '5%' }} />
                            <BlackBoxButton text1="-" text2="Price           " style={{ marginLeft: '5%' }} />
                        </View>

                        <ActorSchemaContainer id="aed100bc-376a-4941-9c04-c96952ca2976" />

                    </View>
                </View >
            </StretchyScrollView>
        </View >
    );
};


export default ScreenHireActor;
