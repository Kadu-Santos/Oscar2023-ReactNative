import { StyleSheet, StatusBar } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({

  box:{
    backgroundColor: theme.colors.primary,
    height: '100%',
   },

  container: {
    paddingTop: StatusBar.currentHeight || 25,
    width: '90%',
    alignSelf: 'center',
  },
});