import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
    pin: {
        title: string,
        tag: string,
        image: string,
    }

}
const PinCard = ({ pin }: Props) => {
    const { title, image, tag } = pin
    const [ratio, setRatio] = useState(1);

    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height))
        }
    }, [image]);
    return (
        <TouchableOpacity style={styles.pinContainer} activeOpacity={0.9}>
            <View>
                <Image source={{ uri: image }}
                    style={[styles.image, { aspectRatio: ratio }]}
                />
                <LinearGradient
                    colors={['#051D2E', 'transparent',]}
                    style={{ height: '100%', aspectRatio: ratio, borderRadius: 20, position: 'absolute' }}
                    start={{ x: 0.3, y: 1.1 }}
                    end={{ x: 0.3, y: 0.4 }}
                />
                <Text style={styles.title} >{title} {'\n'} {tag}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PinCard;
