import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styles } from './style';
import Female from '../../../../assets/svg/female.svg'
import { Actor } from '../../../functionalities/artists/actors/models';

type Props = {
    actor: Actor
}

const ActorSchema = ({ actor }: Props) => {
    if (actor.age == null) {
        actor.age = "-"
    }

    {/*TODO: add the gender icon if male or female*/ }
    if (actor.gender == null) {
        actor.gender = "-"
    }

    if (actor.features.height == null) {
        actor.features.height = "-"
    }

    if (actor.description == null) {
        actor.description = " "
    }


    return (
        <View>

            {/*info*/}
            <View style={{ flexDirection: 'row', marginTop: '8%' }}>
                {/*info box age*/}
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.infoTitles}>Age</Text>
                    <Text style={styles.infoInformation}>{actor.age}</Text>
                </View>
                {/*separator*/}
                <View style={styles.infoSeparator} />

                {/*info box heigh*/}
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.infoTitles}>Height</Text>
                    <Text style={styles.infoInformation}>{actor.features.height}</Text>
                </View>
                {/*separator*/}
                <View style={styles.infoSeparator} />

                {/*info box gender*/}
                <View style={{ flexDirection: 'row' }}>
                    {/*male or female icons*/}
                    <View style={{ alignSelf: 'center' }}>
                        <Female width={17} height={26} fill={COLORS.orange} />
                    </View>
                    <Text style={styles.infoGenders}>{actor.gender}</Text>
                </View>
            </View>

            {/*about*/}
            <View style={{ marginRight: '30%' }}>
                <Text style={[styles.infoTitles, { marginTop: '7%' }]}>About</Text>
                <Text numberOfLines={6} style={[styles.infoInformation, { alignSelf: 'auto', marginTop: '0%' }]}>{actor.description}</Text>
            </View>

            {/*skills*/}
            <View style={{}}>
                <Text style={[styles.infoTitles, { marginTop: '7%' }]}>Skills</Text>
            </View>

            {/*actin reel*/}
            <View style={{ marginRight: '30%' }}>
                <Text style={[styles.infoTitles, { marginTop: '7%' }]}>ActingReel</Text>
            </View>
        </View>
    );
};

export default ActorSchema;
