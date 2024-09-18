import {StyleSheet} from "react-native";
import {colors} from "@/styles/color";
import {fontFamily} from "@/styles/fontFamily";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
    },
    header: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontFamily: fontFamily.extraBold
    },
    subtitle: {
        color: colors.gray[300],
        fontSize: 14,
        fontFamily: fontFamily.medium
    },
    ticket: {
        backgroundColor: colors.white,
        flex: 1,
        width: "100%",
        borderRadius: 22,
        overflow: "hidden",
        paddingBottom: 24
    },
    content: {

    },
    flight: {

    }
});