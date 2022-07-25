import React, { useRef, useState } from 'react';
import { Animated, Easing, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DownArrow from '../../../../assets/svg/downArrow.svg'
import { BlurView } from 'expo-blur'
import { FONTS } from '../../../themes/fonts/ZettingFonts';
import { COLORS } from '../../../themes/colors/ZettingColors';

const FullScreenPopup = () => {
    const [visible, setVisible] = useState(false)
    const scale = useRef(new Animated.Value(0)).current
    const options = [
        {
            title: 'Filmaking',
            action: () => console.log('dd')

        },
        {
            title: 'Photography',
            action: () => console.log('daa')

        },

    ]
    function reziseBox(to: any) {
        to === 1 && setVisible(true);
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => to === 0 && setVisible(false));
    }
    return (
        <>
            <TouchableOpacity
                style={{ padding: 10, borderRadius: 100 }}
                onPress={() => { setVisible(true) }}>
                <DownArrow />
            </TouchableOpacity>
            <Modal transparent visible={visible} >

                <View
                    style={{ flex: 1 }}
                >

                    <BlurView
                        tint='dark'
                        intensity={45}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            opacity: 1,
                        }}
                    />
                    <Animated.ScrollView style={styles.popup}>
                        {options.map((op, i) => (
                            <TouchableOpacity key={i} onPress={op.action}>
                                <Text style={styles.text}>{op.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </Animated.ScrollView>

                    {/*boton para cerrar*/}
                    <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 100, backgroundColor: 'red', position: 'absolute', bottom: 30, alignSelf: 'center' }}
                        onPress={() => reziseBox(0)}
                    >
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

export default FullScreenPopup;

export const styles = StyleSheet.create({
    popup: {
        backgroundColor: '#051D2E80',
        flex: 1,
        paddingTop: 100
    },
    text: {
        alignSelf: 'center',
        fontFamily: FONTS.mainFont,
        fontSize: 30,
        marginBottom: 30,
        color: COLORS.white
    }
})
