import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CustomButton from '../../../components/Buttons/CustomButton';
import ExploreConatainer from '../../../functionalities/explore/containers/ExploreConatainer';
import SearchBarContainer from '../../../functionalities/explore/containers/SearchBarContainer';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styleBackground, styleWrappers } from '../../../themes/styles';

const ScreenExploreHome = () => {
    const [tipo, setTipo] = useState('trend')
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <SearchBarContainer style={{ height: 60 }} />
            <View style={[styleWrappers.frameWrapper, { marginBottom: '3%' }]}>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <CustomButton text='Trend' styleContainer={{ backgroundColor: COLORS.orange, marginHorizontal: 10 }} styleText={{ fontSize: 13, padding: 10 }} onPress={() => { setTipo('trend') }} />
                    <CustomButton text='Design' styleContainer={{ backgroundColor: COLORS.orange, marginRight: 10 }} styleText={{ fontSize: 13, padding: 10 }} onPress={() => { setTipo('design') }} />
                    <CustomButton text='Ilustration' styleContainer={{ backgroundColor: COLORS.orange, marginRight: 10 }} styleText={{ fontSize: 13, padding: 10 }} />
                    <CustomButton text='Photography' styleContainer={{ backgroundColor: COLORS.orange, marginRight: 10 }} styleText={{ fontSize: 13, padding: 10 }} />
                    <CustomButton text='Filmaking' styleContainer={{ backgroundColor: COLORS.orange, marginRight: 10 }} styleText={{ fontSize: 13, padding: 10 }} />
                    <CustomButton text='Animation' styleContainer={{ backgroundColor: COLORS.orange, marginRight: 10 }} styleText={{ fontSize: 13, padding: 10 }} />
                </ScrollView>
            </View>
            <ExploreConatainer tipo={tipo} />
        </SafeAreaView>
    );
};

export default ScreenExploreHome;
