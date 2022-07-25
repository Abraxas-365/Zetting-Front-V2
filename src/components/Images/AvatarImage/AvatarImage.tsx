import React from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';

type Props = {
    avatar?: string
    containerStyle?: StyleProp<ViewStyle>
}

const AvatarImage = ({
    avatar,
    containerStyle
}: Props) => {
    return (
        <>
            <View style={[{
                borderRadius: 100,
                backgroundColor: COLORS.orange,
                width: 33,
                height: 33,
            }, containerStyle]}>
                <Image
                    style={{ flex: 1, borderRadius: 100 }}
                    source={{ uri: avatar }}
                />

            </View>
        </>
    );
};

export default AvatarImage;
