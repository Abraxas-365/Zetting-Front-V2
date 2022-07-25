import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import CustomText from '../../Text/CustomText';
import PostIcon from '../../../../assets/svg/post.svg'

type Props = {
    pin: {
        category: string
        description: string
        type: string
    }
}

const WorkOffers = ({
    pin
}: Props) => {

    const { category, description, type } = pin
    return (
        <View style={styles.container}>
            <View style={styles.frameWrapper} >
                <CustomText text={category} size={15} style={{ fontFamily: FONTS.secondaryFont, }} />
                <Text style={styles.textWrapper}>{description}</Text>
            </View>
            <View style={styles.footer}>
                <CustomText text={type} size={12} style={{ fontFamily: FONTS.secondaryFont, fontWeight: 'bold' }} />
                <View style={{ position: 'absolute', right: 13, bottom: 18 }}>
                    <PostIcon />
                </View>
            </View>
        </View>
    );
};

export default WorkOffers;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightBlue,
        borderRadius: 20,
        marginBottom: '5%',
        marginHorizontal: '5%'
    },
    frameWrapper: {
        margin: 15,
        marginVertical: 14,
    },
    textWrapper: {
        margin: 10,
        color: COLORS.white,
        fontSize: 12,
        fontFamily: FONTS.mainFont
    },
    footer: {
        paddingBottom: 20,
        flexDirection: 'row',
        paddingHorizontal: 15
    }


})
