import { StyleSheet } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({
    text:{
        fontFamily: theme.fonts.regular,
        fontSize: 20,
    },

    container:{
        alignItems: 'center',
        justifyContent: 'center',
    }
});