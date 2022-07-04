import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import SocialMediaButtonsContainer from '../../../functionalities/auth/login/containers/buttons';
import LoginFormContainer from '../../../functionalities/auth/login/containers/forms';
import { AuthContext } from '../../../stores/context/auth/AuthContext';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';


const ScreenLogin = () => {

    return (
        <SafeAreaView style={styleBackground.lightBackground}>
            <View style={styleWrappers.frameWrapper}>
                <Text style={[stylesText.titleDark, { marginBottom: '10%', alignSelf: "center" }]}>LOG IN</Text>
                <LoginFormContainer />
                <SocialMediaButtonsContainer styleContainer={{ marginTop: '20%' }} />

            </View>
        </SafeAreaView>
    );
};

export default ScreenLogin;
