import { StyleSheet, StatusBar } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({

   box:{
    backgroundColor: theme.colors.primary,
    height: '100%',
    justifyContent : 'center',
   },

    container: {
      paddingTop: StatusBar.currentHeight || 25,
      width: '90%',
      alignSelf: 'center'
    },

    linkTerms:{
      color: 'blue',
      padding: 15
    },

    termsButton:{
      alignItems: 'center'
    }

});