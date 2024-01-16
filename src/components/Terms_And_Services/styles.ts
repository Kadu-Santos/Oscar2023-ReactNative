import { StyleSheet, StatusBar} from "react-native";
import theme from "../../Styles/theme";

export const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
    textAlign: "center",
    paddingTop: StatusBar.currentHeight || 25,
    height: '100%',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: '8%',
    flexGrow: 1,
    justifyContent: 'space-between',
   
  },

  scroll: {
    width: '85%',
    paddingHorizontal: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },

  heading: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center'
  },

  sectionTitle: {
    marginTop: 18,
    fontSize: 18,
  },

  body:{
    fontSize: 15,
    textAlign: 'justify',
  },

  container_btn_termos_voltar:{
    width: '100%',
    alignItems: "center",
    marginTop: '7%',
    marginBottom: '3%'
  },

  btn_termos_voltar: {
    width: '50%',
    alignItems: "center",
    backgroundColor: '#0066ffbb',
    borderRadius: 20,
  },

  termos_voltar:{
    color: '#fff',
    padding: '3%',
    fontSize: 17,
    letterSpacing: 1,
    
  }
});