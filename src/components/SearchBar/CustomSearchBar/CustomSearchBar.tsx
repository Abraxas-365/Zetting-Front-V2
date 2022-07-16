
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import Search from '../../../../assets/svg/search.svg'
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styles } from './styles';

type Props = {
    value: any
    updateSearch: any,
    style: any
}
const CustomSearchBar = ({ value, updateSearch, style }: Props) => {

    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Search width={18} height={18} fill={COLORS.blue} />

                </View>

                <TextInput
                    value={value}
                    placeholder="Look for creators"
                    placeholderTextColor={COLORS.blue}
                    style={styles.textInput}
                    onChangeText={(text) => {
                        updateSearch(text)
                    }}
                />
            </View>
        </View >
    )
}

export default CustomSearchBar
