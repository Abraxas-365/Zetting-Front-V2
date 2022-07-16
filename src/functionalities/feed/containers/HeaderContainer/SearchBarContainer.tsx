import React, { useState } from 'react';
import CustomSearchBar from '../../../../components/SearchBar/CustomSearchBar/CustomSearchBar';

const SearchBarFeedContainer = () => {
    const [value, setValue] = useState()
    const updateSearch = (value: any) => {
        //do your search logic or anything
    }
    return (
        <CustomSearchBar
            value={value}
            updateSearch={updateSearch}
            style={{ width: '90%', alignSelf: 'center' }}
        />
    );
};

export default SearchBarFeedContainer;
