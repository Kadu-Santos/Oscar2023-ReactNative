import { StyleSheet } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: "center",
  },

  button:{
    marginTop: '2%',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    borderRadius: 30
  },

  buttonText:{
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    textAlign: 'center',
    marginBottom: "3%"
  },
});