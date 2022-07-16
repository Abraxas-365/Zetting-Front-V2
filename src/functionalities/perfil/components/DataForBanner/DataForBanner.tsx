import React from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../themes/colors/ZettingColors';

type Props = {
    scrollY: Animated.Value
}

const DataForBanner = ({
    scrollY
}: Props) => {
    const insets = useSafeAreaInsets()
    return (
        <Animated.View style={{
            zIndex: 2,
            position: 'absolute',
            top: insets.top,
            left: 0,
            right: 0,
            alignItems: 'center',
            flexDirection: 'row',
            opacity: scrollY.interpolate({
                inputRange: [15, 130],
                outputRange: [0, 1]
            })

        }}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                style={{
                    height: 35,
                    width: 35,
                    borderRadius: 100,
                    marginLeft: '20%',
                    marginRight: '4%'
                }}
            />
            <View>
                <Text
                    style={{ color: COLORS.white, fontSize: 13 }}
                >Alonso Bustamante</Text>
                <Text
                    style={{ color: COLORS.white, fontSize: 11 }}
                >Filmmaker/Photography</Text>

            </View>
        </Animated.View>
    );
};

export default DataForBanner;
