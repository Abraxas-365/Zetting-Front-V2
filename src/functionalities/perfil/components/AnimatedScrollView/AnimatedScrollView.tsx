
import React from 'react';
import { Animated } from 'react-native';

type Props = {
    HEADER_HEIGHT_EXPAND: number
    HEADER_HEIGHT_NARROW: number
    children: any
    scrollY: Animated.Value
}

const AnimatedScrollView = ({
    children,
    HEADER_HEIGHT_NARROW,
    HEADER_HEIGHT_EXPAND,
    scrollY
}: Props) => {
    return (
        <Animated.ScrollView
            onScroll={
                Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }
                ],
                    {
                        useNativeDriver: true
                    })
            }
            style={{
                zIndex: 3,
                marginTop: HEADER_HEIGHT_NARROW,
                paddingTop: HEADER_HEIGHT_EXPAND,
            }}>
            {children}
        </Animated.ScrollView>
    );
};

export default AnimatedScrollView;
