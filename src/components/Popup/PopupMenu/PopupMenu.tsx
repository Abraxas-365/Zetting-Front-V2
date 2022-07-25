
import React, { useRef, useState } from 'react';
import { Animated, Easing, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DownArrow from '../../../../assets/svg/downArrow.svg'

const PopupMenu = () => {
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
                <SafeAreaView
                    style={{ flex: 1 }}
                    onTouchStart={() => reziseBox(0)}
                >
                    <Animated.View style={styles.popup}>
                        {options.map((op, i) => (
                            <TouchableOpacity key={i} onPress={op.action}>
                                <Text>{op.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </>
    );
};

export default PopupMenu;

export const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        backgroundColor: '#fff',
        position: 'absolute',
        right: 10,
        top: 78,
        paddingHorizontal: 10


    }
})
