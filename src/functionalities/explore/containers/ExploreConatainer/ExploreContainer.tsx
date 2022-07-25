
import React, { useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
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
]

const filteredItems2 = [
    {
        id: "0",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        title: "test",
        tag: "tag"
    },
    {
        id: "1",
        image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/4.jpeg",
        title: "test",
        tag: "tag"
    },
]
type Props = {
    header?: JSX.Element | JSX.Element[]
    style?: StyleProp<ViewStyle>
    tipo?: string
}
const ExploreContainer = ({
    style,
    tipo
}: Props) => {
    const [data, setData] = useState(filteredItems)
    useEffect(() => {
        if (tipo == 'trend') {
            setData(filteredItems)
        } else if (tipo == 'design') {
            setData(filteredItems2)
        }
    })
    return (
        <View style={[styleWrappers.frameWrapper, { flex: 1 }, style]}>
            <MasonrryList
                style={{ backgroundColor: COLORS.blue, alignSelf: 'stretch' }}
                data={data}
                keyExtractor={(item): string => item.id}
                contentContainerStyle={{
                    backgroundColor: COLORS.blue,
                    marginTop: 20
                }}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <PinCard pin={item} />}
            />

        </View>
    );
};

export default ExploreContainer;
