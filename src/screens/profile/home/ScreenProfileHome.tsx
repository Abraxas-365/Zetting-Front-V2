import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StretchyScrollView } from 'react-native-stretchy';
import { serveDefaultImages } from '../../../api/apiCalls';
import BlackBoxButton from '../../../components/Buttons/BlackBoxButton';
import ActorSchemaContainer from '../../../functionalities/artists/actors/container/schemas/ActorSchema/ActorSchemaContainer';
import BlackInfoButtonProject from '../../../functionalities/projects/containers/buttons/BlackInfoButton/BlackInfoButton';
import { useGetUser } from '../../../functionalities/user/hooks/useGetUser';
import { AuthContext } from '../../../stores/context/auth/AuthContext';
import { styleBackground, styleWrappers } from '../../../themes/styles';
import { styles } from './style'
const ScreenProfileHome = () => {
    const { userId } = useContext(AuthContext)
    console.log(userId);
    const { isLoadingUser, user } = useGetUser(userId)
    var AvatarImage = require('../../../../assets/noAvatar.jpeg')
    isLoadingUser ?
        AvatarImage = AvatarImage
        :
        AvatarImage = { uri: serveDefaultImages + '/luisf.jpeg' }


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
                                <Text style={styles.nameText}>{isLoadingUser ? user.name : user.name.toUpperCase()}</Text>
                                <Text style={styles.professionText}>{user.profession}</Text>
                            </View>
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

export default ScreenProfileHome;

