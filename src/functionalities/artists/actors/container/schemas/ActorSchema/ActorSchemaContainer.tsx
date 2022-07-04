import React from 'react';
import { ActivityIndicator } from 'react-native';
import ActorSchema from '../../../../../../components/schemas/Actors/ActorSchema';
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { useGetActor } from '../../../hooks/useGetActor';


type Props = {
    id: string;
}

const ActorSchemaContainer = ({ id }: Props) => {
    const { actor, isLoadingActors } = useGetActor(id)
    return (
        isLoadingActors ?
            <ActivityIndicator size={50} color={COLORS.orange} style={{ marginTop: '20%' }} />
            :
            <ActorSchema actor={actor} />
    );
};

export default ActorSchemaContainer;
