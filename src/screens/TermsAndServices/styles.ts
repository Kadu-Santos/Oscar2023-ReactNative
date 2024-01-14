import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 25,
    height: '100%',
    backgroundColor: theme.colors.primary,
  },

  scroll: {
    width: '85%',
    paddingHorizontal: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },

  heading: {
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
    textAlign: 'center'
  },

  sectionTitle: {
    marginTop: 18,
    fontSize: 18,
    fontFamily: theme.fonts.regular,
  },

  body:{
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    textAlign: 'justify',
  }
});