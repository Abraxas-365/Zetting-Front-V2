import React from 'react';
import { Animated, ImageBackground, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur'

type Props = {
    HEADER_HEIGHT_EXPAND: number
    HEADER_HEIGHT_NARROW: number
    scrollY: Animated.Value
    children: any //TODO change this tu a JSX compinent
}

const Animatedbanner = ({
    HEADER_HEIGHT_EXPAND,
    HEADER_HEIGHT_NARROW,
    scrollY,
    children

}: Props) => {
    const AnimatedImageBackground = Animated.createAnimatedComponent(
        ImageBackground
    )
    const AnimatedBlur = Animated.createAnimatedComponent(
        BlurView
    )
    return (
        <AnimatedImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1495277493816-4c359911b7f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80' }}
            style={{
                height: HEADER_HEIGHT_EXPAND + HEADER_HEIGHT_NARROW, left: 0, right: 0, zIndex: 2, position: 'absolute',
                transform: [
                    {
                        scale: scrollY.interpolate({
                            inputRange: [-200, 0],
                            outputRange: [5, 1],
                            extrapolateLeft: 'extend',
                            extrapolateRight: 'clamp'
                        })
                    }
                ]
            }}
        >
            <AnimatedBlur
                tint='dark'
                intensity={10}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    zIndex: 2,
                    opacity: scrollY.interpolate({
                        inputRange: [-50, 0, 20, 60],
                        outputRange: [1, 0, 0, 1]
                    })
                }}
            />
            {children}
        </AnimatedImageBackground>
    );
};

export default Animatedbanner;
