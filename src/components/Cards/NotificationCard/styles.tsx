import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";



export const styles = StyleSheet.create({
    container: {
        width: 335,
        height: 127,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 20,
    },
    firstRow: {
        flexDirection: 'row',
    },
    wrapper: {
        margin: 25,
    }
})
