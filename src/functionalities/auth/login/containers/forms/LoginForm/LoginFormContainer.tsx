import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import I18n from 'i18n-js';
import React, { useContext } from 'react';
import { View } from 'react-native';
import CustomButton from '../../../../../../components/Buttons/CustomButton';
import CustomStakeHold from '../../../../../../components/Stakeholders/CustomStakeHold';
import { MainStackParamList } from '../../../../../../navigation/main/mainNavigator';
import { AuthContext } from '../../../../../../stores/context/auth/AuthContext';
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../../../themes/fonts/ZettingFonts';
import { useForm } from '../../../../../share/hooks/useForm';
import { UserLogin } from '../../../model';
import { styles } from './style'

//TODO: function to connect to the back
const LoginFormContainer = () => {
    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    })
    const user: UserLogin = {
        email: email,
        password: password
    }

    const { signIn, status } = useContext(AuthContext);

    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    return (
        <View >
            {/*email*/}
            <CustomStakeHold
                boxWrapper={styles.textInputWrapper}
                textInputStyle={styles.textInput}
                textInputProps={{
                    keyboardType: 'email-address',
                    onChangeText: (value) => { onChange(value, 'email') },
                    placeholder: I18n.t("Auth.YourEmail"),
                    placeholderTextColor: COLORS.black,
                }} />

            {/*password*/}
            <CustomStakeHold
                boxWrapper={[{ marginTop: '10%' }, styles.textInputWrapper]}
                textInputStyle={styles.textInput}
                textInputProps={{
                    secureTextEntry: true,
                    keyboardAppearance: 'dark',
                    onChangeText: (value) => { onChange(value, 'password') },
                    placeholder: I18n.t("Auth.Password"),
                    placeholderTextColor: COLORS.black,
                }} />

            {/*submit*/}
            <CustomButton
                text={I18n.t("Auth.SignIn")}
                styleContainer={styles.submitButton}
                styleText={styles.submitButtonText}
                onPress={() => {
                    signIn(email, password)
                    if (status == 'autenticated') {

                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'HomeScreen' }
                                ]

                            }))
                    }

                }}

            />


        </View>
    );
};

export default LoginFormContainer;
