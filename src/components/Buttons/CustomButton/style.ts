import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";
import { FONTS } from "../../../themes/fonts/ZettingFonts";



export const style = StyleSheet.create({
    button: {
        borderRadius: 23,
        backgroundColor: COLORS.black,
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: FONTS.mainFont,
        padding: 8,
        color: COLORS.white
    }
})
