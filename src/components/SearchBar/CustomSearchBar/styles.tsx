import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors/ZettingColors";

export const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',

    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 16,
        flex: 1,
        color: COLORS.blue
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: '#FFFFFF',
        height: 45,
        flexDirection: 'row'

    },
    container: {
        height: 80,
        alignItems: 'center',
    },
});
