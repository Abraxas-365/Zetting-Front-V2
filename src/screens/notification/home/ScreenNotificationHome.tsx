import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';

const ScreenNotificationHome = () => {
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                <Text style={stylesText.titleLight}>NOTIFICATION</Text>
                <Text style={styles.numberNotificationsText}>You have n notifications</Text>
            </View>


        </SafeAreaView>
    );
};

export default ScreenNotificationHome;

const styles = StyleSheet.create({
    numberNotificationsText: {
        fontSize: 15,
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
        marginTop: '3%'
    }
})
