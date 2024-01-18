import { StyleSheet, Dimensions, StatusBar } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({

  box: {
    backgroundColor: theme.colors.primary,
    height: '100%',
  },

  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20
  },
});