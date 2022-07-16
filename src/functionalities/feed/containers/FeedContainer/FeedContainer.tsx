import React from 'react';
import { View } from 'react-native';
import PinCard from '../../../../components/Cards/PinCard';
import MasonrryList from '../../../../components/Lists/MasonryList';
import { COLORS } from '../../../../themes/colors/ZettingColors';
import { styleWrappers } from '../../../../themes/styles';

const filteredItems = [
    {
        id: "0",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "1",
        image:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35f6a595226917.5e929d3672fd7.jpg",
        title: "test",
        tag: "tag"
    },
    {
        id: "2",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg",
        title:
            "test",
        tag: "tag"
    },
    {
        id: "3",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "4",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "5",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "6",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },

    {
        id: "7",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "8",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg",
        title:
            "test",
        tag: "tag"
    },
    {
        id: "9",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "10",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "11",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "12",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },
]

type Props = {
    header?: JSX.Element | JSX.Element[]
}
const FeedContainer = ({
    header = <View />
}: Props) => {
    return (
        <View style={[styleWrappers.frameWrapper, { flex: 1 }]}>
            <MasonrryList
                children={
                    header
                }
                style={{ backgroundColor: COLORS.blue, alignSelf: 'stretch' }}
                data={filteredItems}
                keyExtractor={(item): string => item.id}
                contentContainerStyle={{
                    backgroundColor: COLORS.blue,
                }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PinCard pin={item} />}
            />
        </View>
    );
};

export default FeedContainer;
