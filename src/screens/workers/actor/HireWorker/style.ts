
import { StyleSheet } from "react-native";
import { COLORS } from "../../../../themes/colors/ZettingColors";
import { FONTS } from "../../../../themes/fonts/ZettingFonts";

export const styles = StyleSheet.create({
    nameText: {
        fontSize: 25,
        fontFamily: FONTS.secondaryFontBold,
        color: COLORS.white
    },
    professionText: {
        marginTop: "2%",
        fontSize: 20,
        fontFamily: FONTS.mainFont,
        color: COLORS.white
    },
    header: {
        flexDirection: 'row',
    },
    nameNprofession: {
        flexDirection: 'column'
    },
    blackBoxButtonsView: {
        marginTop: '10%',
        flexDirection: 'row'
    },
    infoTitles: {
        fontFamily: FONTS.mainFontBold,
        color: COLORS.white,
        fontSize: 20
    },
    infoInformation: {
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 10
    },
    infoSeparator: {
        borderRightWidth: 1,
        borderColor: COLORS.white,
        height: 20, alignSelf: 'center',
        marginHorizontal: '5%'
    },
    infoGenders: {
        fontFamily: FONTS.mainFont,
        color: COLORS.white,
        fontSize: 15,
        alignSelf: 'center',
        marginLeft: '8%'

    }
})
