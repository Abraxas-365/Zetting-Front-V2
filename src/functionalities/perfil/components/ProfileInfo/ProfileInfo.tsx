import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import CustomText from '../../../../components/Text/CustomText';
import { COLORS } from '../../../../themes/colors/ZettingColors';
import { FONTS } from '../../../../themes/fonts/ZettingFonts';

type Props = {
    style?: StyleProp<ViewStyle>
    data: {
        views: string
        projects: string
        comments: string
    }
}

const ProfileInfo = ({
    style,
    data
}: Props) => {
    return (
        <View style={[{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }, style]}>
            <View style={{ alignItems: 'center', }}>
                <CustomText text={data.views} size={20} style={{ fontFamily: FONTS.mainFontBold }} />
                <CustomText text='Views' size={15} style={{ fontFamily: FONTS.mainFont }} />
            </View>

            <View style={{ height: 20, borderWidth: 1, borderLeftColor: COLORS.white, marginHorizontal: '5%', marginTop: 5 }} />

            <View style={{ alignItems: 'center' }}>
                <CustomText text={data.projects} size={20} style={{ fontFamily: FONTS.mainFontBold }} />
                <CustomText text='Projects' size={15} style={{ fontFamily: FONTS.mainFont }} />
            </View>

            <View style={{ height: 20, borderWidth: 1, borderLeftColor: COLORS.white, marginHorizontal: '5%', marginTop: 5 }} />
            <View style={{ alignItems: 'center', }}>
                <CustomText text={data.comments} size={20} style={{ fontFamily: FONTS.mainFontBold }} />
                <CustomText text='Comments' size={15} style={{ fontFamily: FONTS.mainFont }} />
            </View>

        </View>
    );
};

export default ProfileInfo;
