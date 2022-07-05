import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";

export const styles = StyleSheet.create({

    pinContainer: {
        width: '100%'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        fontSize: 12,
        color: COLORS.white
    }
})
