import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PinCard from '../../../components/Cards/PinCard';
import { styleBackground, styleWrappers } from '../../../themes/styles';
import { COLORS } from '../../../themes/colors/ZettingColors';
import MasonrryList from '../../../components/Lists/MasonryList';
import FeedContainer from '../../../functionalities/feed/containers/FeedContainer/FeedContainer';


const ScreenFeedHome = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue }}>
            <FeedContainer />
        </SafeAreaView >
    );
};

export default ScreenFeedHome;

