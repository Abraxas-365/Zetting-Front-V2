import React from 'react';
import { View } from 'react-native';
import FeedContainer from '../FeedContainer';
import SearchBarFeedContainer from './SearchBarContainer';
import StoryContainer from './StoryContainer';

const HeaderContainer = () => {
    return (
        <View>
            <SearchBarFeedContainer />
            <StoryContainer />
        </View>
    );
};

export default HeaderContainer;
