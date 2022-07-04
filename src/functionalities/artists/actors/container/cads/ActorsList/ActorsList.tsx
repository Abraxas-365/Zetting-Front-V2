import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, FlatList, StyleProp, View, ViewStyle } from 'react-native';
import WorkerCard from '../../../../../../components/Cards/WorkerCard';
import { RootStackParamListProject } from '../../../../../../navigation/stack/ProjectStack';
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { useGetActors } from '../../../hooks/useGetActors';
type Props = {
    containerView?: StyleProp<ViewStyle>
    listStyle?: StyleProp<ViewStyle>
}

const ActorsList = ({
    containerView,
    listStyle
}: Props) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamListProject>>();

    const { actors, isLoadingActors } = useGetActors();
    return (
        <View style={[containerView]}>
            {
                isLoadingActors ?
                    <ActivityIndicator size={50} color={COLORS.orange} style={{ marginTop: '20%' }} />
                    :
                    <FlatList
                        style={[listStyle]}
                        contentContainerStyle={{ flexGrow: 1, }}
                        data={actors} renderItem={({ item }) => <WorkerCard
                            heardState={false}
                            containerStyle={{ marginBottom: 20 }}
                            name={item.name}
                            info={item.description}
                            onPress={() => { navigation.navigate('HireActors', { userId: item.id }) }}
                        />}
                    />
            }
        </View>
    );
};

export default ActorsList;
