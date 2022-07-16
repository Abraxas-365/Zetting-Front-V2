import React from 'react';
import { Animated } from 'react-native';
import CustomText from '../../../../components/Text/CustomText';

type Props = {
    scrollY: Animated.Value
    name?: string
    carrear?: string
}

const NameInfo = ({
    scrollY
}: Props) => {
    return (
        <Animated.View
            style={{
                alignSelf: 'center',
                alignItems: 'center',
                opacity: scrollY.interpolate({
                    inputRange: [0, 90],
                    outputRange: [1, 0]
                }),

                transform: [
                    {
                        translateY: scrollY.interpolate({
                            inputRange: [1, 25],
                            outputRange: [1, -30],
                            extrapolate: 'clamp'
                        }),

                    },
                ]

            }}

        >
            <CustomText text='Alonso Bustamante' size={21} />
            <CustomText text='Filmmaker/Photography' size={15} />
        </Animated.View>
    );
};

export default NameInfo;
