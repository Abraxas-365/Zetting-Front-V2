import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const PinCard = () => {
    return (
        <TouchableOpacity style={styles.pinContainer} activeOpacity={0.9}>
            <View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1657030871212-95d863306bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80' }}
                    style={styles.image}
                />
                <LinearGradient
                    colors={['#051D2E', 'transparent',]}
                    style={{ height: '100%', width: '100%', borderRadius: 20, position: 'absolute' }}
                    start={{ x: 0.3, y: 1.1 }}
                    end={{ x: 0.3, y: 0.4 }}
                />
                <Text style={styles.title} >Binoid {'\n'} Product Photography</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PinCard;
