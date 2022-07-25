import React from 'react';
import { ScrollView, View } from 'react-native';
import StoryButton from '../../../../components/Buttons/StoryBtn';
import { COLORS } from '../../../../themes/colors/ZettingColors';

const StoryContainer = () => {
    return (
        <View >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <StoryButton
                    borderColor={COLORS.blue}
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Add +"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />
                <StoryButton
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Zetting"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />
                <StoryButton
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Zetting"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />
                <StoryButton
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Zetting"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />
                <StoryButton
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Zetting"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />
                <StoryButton
                    image="https://images.unsplash.com/photo-1633373336822-7bd3c52dc15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    text="Zetting"
                    containerStyle={{ marginLeft: 9, marginRight: 5 }}
                />

            </ScrollView>

        </View>
    );
};

export default StoryContainer;
