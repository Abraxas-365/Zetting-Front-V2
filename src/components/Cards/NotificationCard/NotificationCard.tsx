import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import AvatarImage from '../../Images/AvatarImage';
import CustomText from '../../Text/CustomText';
import { styles } from './styles'
import StarIcon from '../../../../assets/svg/star.svg'
import { COLORS } from '../../../themes/colors/ZettingColors';

type Props = {
    data: {
        avatar: string,
        name: string,
        date: string,
        comment: string,
        starts: string
    }
}

const NotificationCard = ({
    data
}: Props) => {
    const { avatar, name, date, comment, starts } = data;
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container} >
            <View style={styles.wrapper}>
                {/*firstRow*/}
                <View style={styles.firstRow}>
                    {/*image avatar*/}
                    <AvatarImage avatar={avatar} />
                    {/*name/date*/}
                    <View style={{ marginLeft: 10 }}>
                        <CustomText text={name} size={12} style={{ fontFamily: FONTS.secondaryFont }} />
                        <CustomText text={date} size={9} style={{ fontFamily: FONTS.secondaryFont }} />
                    </View>
                    {/*stars*/}
                    <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', right: 0, alignItems: 'center' }}>
                        <CustomText text={starts} style={{ fontFamily: FONTS.secondaryFont, marginRight: 3 }} size={12} />
                        <StarIcon />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text numberOfLines={2} style={{ fontFamily: FONTS.mainFont, color: COLORS.white, fontSize: 12 }}>
                        {comment}
                    </Text>
                </View>
            </View>


        </TouchableOpacity>
    );
};

export default NotificationCard;
