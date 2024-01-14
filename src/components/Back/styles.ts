import { StyleSheet } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({
    textButton:{
        fontFamily: theme.fonts.regular,
        fontSize: 16,
      },
    
      button:{
        alignSelf: 'flex-start',
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
      },
});