import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';

type Props = {
    text1?: string
    text2?: string
    onPress?: () => void
    style?: StyleProp<ViewStyle>

}

const BlackBoxButton = ({
    text1 = "-",
    text2 = "text",
    onPress = () => { },
    style
}: Props) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={() => { onPress() }}
        >
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{text1}</Text>
                <Text style={[styles.text, { marginTop: '8%' }]}>{text2}</Text>

            </View>
        </TouchableOpacity>
    );
};

export default BlackBoxButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#050508",
        borderRadius: 9
    },
    textWrapper: {

        padding: 16,
        paddingTop: 20,
    },
    text: {
        fontSize: 15,
        color: COLORS.white,
        fontFamily: FONTS.mainFont
    }

})
