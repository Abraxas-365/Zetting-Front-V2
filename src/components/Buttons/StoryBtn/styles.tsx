import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: COLORS.orange,
        height: 60,
        justifyContent: 'center',
        width: 60,
        borderRadius: 100

    },
    image: {
        alignSelf: 'center',
        height: 54,
        width: 54,
        borderRadius: 100
    },
    text: {
        marginTop: 8,
        alignSelf: 'center',
        color: COLORS.white,
        fontSize: 12
    }
})
