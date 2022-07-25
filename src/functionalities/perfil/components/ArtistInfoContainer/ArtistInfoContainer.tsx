import React from 'react';
import { View } from 'react-native';
import InfoCard from '../../../../components/Cards/InfoCard';
import LocationIcon from '../../../../../assets/svg/location.svg'
const ArtistInfoContainer = () => {
    return (
        <>
            <InfoCard title="About me" />

            <InfoCard title="Location" text='aa' children={<View style={{ marginRight: 8 }}>
                <LocationIcon />
            </View>} />
        </>
    );
};

export default ArtistInfoContainer;
