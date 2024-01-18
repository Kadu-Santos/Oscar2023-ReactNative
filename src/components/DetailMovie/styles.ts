import { StyleSheet } from "react-native";
import theme from "../../global/Styles/theme";

export const styles = StyleSheet.create({


  ////////////////////////
  containerDescription: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  ///////////////////////
  containerDD: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  containerDirDur: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '40%'
  },

  textDesc: {
    textAlign: 'justify',
    fontFamily: theme.fonts.regular,
    width: '90%'
  },

  textDD: {
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
  },

  iconDesc: {
    width: 25,
    height: 25,
    marginRight: 5,
    marginTop: 10,
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },

});