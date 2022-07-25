import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import CustomSearchBar from '../../../../components/SearchBar/CustomSearchBar/CustomSearchBar';

type Props = {
    style?: StyleProp<ViewStyle>
}

const SearchBarExploreContainer = ({
    style
}: Props) => {
    const [value, setValue] = useState()
    const updateSearch = (value: any) => {
        //do your search logic or anything
    }
    return (
        <CustomSearchBar
            value={value}
            updateSearch={updateSearch}
            style={[{ width: '90%', alignSelf: 'center' }, style]}
        />
    );
};

export default SearchBarExploreContainer;
