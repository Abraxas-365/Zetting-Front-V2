import React, { useRef, useState } from 'react';
import { Animated, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProfilePic from '../../../components/Buttons/ProfilePic';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styleBackground, styleWrappers } from '../../../themes/styles';
import AnimatedBanner from '../../../components/Banners/Animated/AnimatedBanner';
import DataForBanner from '../../../functionalities/perfil/components/DataForBanner';
import NameInfo from '../../../functionalities/perfil/components/NameInfo';
import AnimatedScrollView from '../../../functionalities/perfil/components/AnimatedScrollView';
import ProfileInfo from '../../../functionalities/perfil/components/ProfileInfo';
import CustomButton from '../../../components/Buttons/CustomButton';
import Mail from '../../../../assets/svg/mail.svg'
const ScreenProfileHome = () => {
    const HEADER_HEIGHT_NARROW = 90
    const HEADER_HEIGHT_EXPAND = 69
    const scrollY = useRef(new Animated.Value(0)).current
    return (
        <View style={styleBackground.darkBackground}>
            {/*Banner*/}
            <AnimatedBanner HEADER_HEIGHT_EXPAND={69} HEADER_HEIGHT_NARROW={90} scrollY={scrollY}>
                <DataForBanner scrollY={scrollY} />
            </AnimatedBanner>

            <AnimatedScrollView scrollY={scrollY} HEADER_HEIGHT_EXPAND={HEADER_HEIGHT_EXPAND} HEADER_HEIGHT_NARROW={HEADER_HEIGHT_NARROW}>
                {/*profile/photos*/}
                <View style={[{ backgroundColor: COLORS.blue, marginBottom: 80 }, styleWrappers.frameWrapper]}>
                    {/*Header name/avatar*/}
                    <View style={{ marginTop: -60 }}>
                        <ProfilePic
                            image={'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                            scrollY={scrollY}
                            haveStories={true}
                        />
                        {/*Name and info */}
                        <NameInfo scrollY={scrollY} />
                    </View>
                    {/*Views,Projects,Comments*/}
                    <ProfileInfo data={{ views: '250', projects: '2', comments: '3' }} style={{ marginTop: 25 }} />
                    {/*Contact buttons*/}
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                        <CustomButton text='Contact' styleContainer={{ borderColor: COLORS.orange, backgroundColor: COLORS.orange, width: 135, marginRight: '4%' }} styleText={{ padding: 10 }} />
                        <CustomButton styleContainer={{ width: 43, height: 43, backgroundColor: '#0E3550', borderColor: '#0E3550' }} childrenStyle={{ alignSelf: 'center', alignItems: 'center', marginTop: 12 }}>
                            <Mail />
                        </CustomButton>

                    </View>

                </View>
            </AnimatedScrollView>
        </View >
    );
};

export default ScreenProfileHome;

