import React from 'react';
import { Image, StyleProp, Text, TextProps, TextStyle, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styles } from './styles';


type Props = {
    containerStyle?: StyleProp<ViewStyle>
    image: string
    text?: string
    textStyle?: StyleProp<TextStyle>
    borderColor?: string
}

const StoryButton = ({
    image,
    text,
    textStyle,
    containerStyle,
    borderColor = COLORS.orange

}: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity style={[styles.imageContainer, { borderColor: borderColor }]}
                activeOpacity={0.5}
            >
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
            </TouchableOpacity>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View >
    );
};

export default StoryButton;
