import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 100,
        width: 120,
        height: 120,

    },
    storyWrapper: {
        alignSelf: 'center',
        position: 'absolute',
        width: 106,
        borderRadius: 100,
        height: 106,
        borderWidth: 1.5,
        borderColor: COLORS.orange,
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 100,
        alignSelf: 'center',
    },
    background: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.blue,
        borderRadius: 100,
        width: 120,
        height: 120,
    }

})
