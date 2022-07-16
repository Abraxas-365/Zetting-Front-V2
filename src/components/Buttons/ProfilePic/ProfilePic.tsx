import React from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { styles } from './style'
type Props = {
    haveStories: boolean;
    onPress?: () => void;
    image?: string;
    scrollY: Animated.Value
    // scrollX: Animated.Value
}
const ProfilePic = ({
    haveStories = true,
    image,
    scrollY,
    // scrollX

}: Props) => {
    {/* TODO: make the opacity 1 when no stories*/ }
    return (
        <Animated.View style={[styles.background, {
            transform: [
                {
                    scale: scrollY.interpolate({
                        inputRange: [1, 25],
                        outputRange: [1, 0.5],
                        extrapolate: 'clamp'
                    }),

                },
            ],

            opacity: scrollY.interpolate({
                inputRange: [0, 140],
                outputRange: [1, 0]
            }),
        }]}>
            <TouchableOpacity style={styles.container}
                activeOpacity={0.8}
            >
                <View style={[styles.storyWrapper, haveStories ? { display: 'flex' } : { display: 'none' }]} />
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            </TouchableOpacity>
        </Animated.View>

    );
};

export default ProfilePic;

