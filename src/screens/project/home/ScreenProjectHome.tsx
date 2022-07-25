import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SmallPerfilCard from '../../../components/Cards/SmallPerfilCard';
import WorkOffersCard from '../../../components/Cards/WorkOffersCard';
import { styleBackground } from '../../../themes/styles';
import Suitcase from '../../../../assets/svg/suitcase.svg'
import CustomText from '../../../components/Text/CustomText';
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import PopupMenu from '../../../components/Popup/PopupMenu';
import WorkPostsContainer from '../../../functionalities/project/container/WorkPostsContainer';
import FullScreenPopup from '../../../components/Popup/FullScreenPopup';

const filteredItems2 = [
    {
        id: "0",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "1",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },
]

const ScreenProjectHome = () => {
    return (
        <SafeAreaView style={[styleBackground.darkBackground]}>
            <View>
                {/*Header*/}
                <View style={styles.header}>
                    {/*sutcase*/}
                    <View style={{ flexDirection: 'row', alignContent: 'center' }} >
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Suitcase />
                            <CustomText text='10' style={{ fontFamily: FONTS.mainFont, alignItems: 'center', margin: 3, marginLeft: 8 }} size={12} />
                        </View>
                    </View>
                    {/*Category*/}
                    <View style={{ flex: 1 }}>
                        <CustomText text='Filmaking' size={16} style={{ fontFamily: FONTS.secondaryFont, alignSelf: 'center' }} />
                    </View>
                    <View style={{}}>
                        <FullScreenPopup />
                    </View>

                </View>
            </View>
            <WorkPostsContainer />
        </SafeAreaView >
    );
};

export default ScreenProjectHome;

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginBottom: 10
    }
})
