import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import { styles } from './styles'


type Props = {
    text: string
    size: number
    style?: StyleProp<TextStyle>
}

const CustomText = ({
    text,
    size,
    style

}: Props) => {
    return (
        <>
            <Text numberOfLines={1} style={[{ fontSize: size }, style, styles.text]}>
                {text}
            </Text >
        </>
    );
};

export default CustomText;
