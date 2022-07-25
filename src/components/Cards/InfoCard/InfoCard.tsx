import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import ReadMore from '@fawazahmed/react-native-read-more';

type Props = {
    children?: any
    title: string
    text?: string
}

const InfoCard = ({
    children,
    title,
    text
}: Props) => {
    return (
        <>
            <Text style={{ fontFamily: FONTS.secondaryFont, color: COLORS.white, fontSize: 15, marginBottom: 8 }}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                {children}
                <ReadMore numberOfLines={3} style={{ color: COLORS.white, fontSize: 14.5, fontFamily: FONTS.mainFont }}
                    seeMoreStyle={{ color: COLORS.powerOrange }}
                    seeLessStyle={{ color: COLORS.powerOrange }}>
                    {text}
                </ReadMore>
            </View >
        </>
    );
};

export default InfoCard;
