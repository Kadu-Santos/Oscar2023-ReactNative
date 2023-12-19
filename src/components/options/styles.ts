import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


  container: {
 
  },
 
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },


  text: {
    fontSize: 18, // se colocar porcentagem da erro
    fontFamily: 'Arial',
    width: '90%',
    textAlign: 'center',
  },  


  button:{
    marginTop: '5%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: '5%',
    marginRight: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 3,
 
  },
 
  button2:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: '5%',
    marginBottom: '20%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 3,
 
  },


});
