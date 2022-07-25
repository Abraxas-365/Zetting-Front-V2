import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import FeedContainer from '../../../functionalities/feed/containers/FeedContainer/FeedContainer';
import HeaderContainer from '../../../functionalities/feed/containers/HeaderContainer';
import { styleWrappers } from '../../../themes/styles';
import ZettingName from '../../../../assets/svg/zettingName.svg'
import CustomText from '../../../components/Text/CustomText';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import { styles } from './styles'


const ScreenFeedHome = () => {
    const [tipo, setTipo] = useState('general');

    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: COLORS.blue }]}>
            {/*Title and pagaes*/}
            <View style={[styles.titleAndPages, styleWrappers.frameWrapper]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '3%' }}>
                    {/*Title*/}
                    <View style={styles.zettingTitle} >
                        <ZettingName />
                    </View>
                    {/*pages*/}
                    <View style={{ flex: 0.8, flexDirection: 'row' }}>
                        {/*General*/}
                        <TouchableOpacity style={{ marginRight: '5%', borderBottomColor: COLORS.white, borderBottomWidth: tipo == 'general' ? 1 : 0 }}
                            activeOpacity={0.7}
                            onPress={() => {
                                setTipo('general');
                            }}
                        >
                            <CustomText text='General' style={{ fontFamily: FONTS.secondaryFont }} size={16} />
                        </TouchableOpacity>
                        {/*Connected*/}
                        <TouchableOpacity style={{ borderBottomColor: COLORS.white, borderBottomWidth: tipo == 'connected' ? 1 : 0 }}
                            activeOpacity={0.7}
                            onPress={() => {
                                setTipo('connected');
                            }}
                        >
                            <CustomText text='Connected' style={{ fontFamily: FONTS.secondaryFont }} size={16} />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
            <FeedContainer header={<HeaderContainer />} tipo={tipo} />
        </SafeAreaView >
    );
};

export default ScreenFeedHome;


