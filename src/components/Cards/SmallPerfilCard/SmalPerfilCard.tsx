import React from 'react';
import { Image, StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import CustomText from '../../Text/CustomText';

type Props = {
    data: {
        avatar: string
        name: string
        userName: string

    }
    containerStyle: StyleProp<ViewStyle>
}

const SmalPerfilCard = () => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{ width: 100, alignItems: 'center' }}>
            {/*avatar*/}
            <View style={{ height: 60, width: 60, borderRadius: 100 }}>
                <Image
                    style={{ flex: 1, borderRadius: 100 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1657980232515-6d7478a66961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                />
            </View>
            <CustomText text='Luis Fernando' size={14} style={{ fontFamily: FONTS.secondaryFont, fontWeight: '200', alignSelf: 'center', marginTop: 10 }} />
            <CustomText text='@lore.na' size={12} style={{ fontFamily: FONTS.mainFont, alignSelf: 'center', marginTop: 2 }} />



        </TouchableOpacity>
    );
};

export default SmalPerfilCard;
