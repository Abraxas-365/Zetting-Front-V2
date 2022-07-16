import React from 'react';
import { Image, StyleProp, Text, TextProps, TextStyle, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native';
import { styles } from './styles';


type Props = {
    containerStyle?: StyleProp<ViewStyle>
    image: string
    text?: string
    textStyle?: StyleProp<TextStyle>
}

const StoryButton = ({
    image,
    text,
    textStyle,
    containerStyle
}: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imageContainer}
                    activeOpacity={0.5}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                    />
                </TouchableOpacity>
            </View >
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View >
    );
};

export default StoryButton;
