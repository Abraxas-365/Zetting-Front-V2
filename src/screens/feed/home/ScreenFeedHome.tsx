import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PinCard from '../../../components/Cards/PinCard';
import { styleBackground } from '../../../themes/styles';
const ScreenFeedHome = () => {
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <PinCard />
        </SafeAreaView >
    );
};

export default ScreenFeedHome;

