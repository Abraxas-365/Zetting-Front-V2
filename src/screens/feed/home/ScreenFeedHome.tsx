import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import FeedContainer from '../../../functionalities/feed/containers/FeedContainer/FeedContainer';
import HeaderContainer from '../../../functionalities/feed/containers/HeaderContainer';


const ScreenFeedHome = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue }}>
            <FeedContainer header={<HeaderContainer />} />
        </SafeAreaView >
    );
};

export default ScreenFeedHome;

