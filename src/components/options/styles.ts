import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


  container: {
    width: '100%'
  },
 
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },


  text: {
    fontSize: 20, 
    width: '90%',
    textAlign: 'center',
  },  


  button:{
    marginTop: '2%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: '10%',
    marginRight: '10%',
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
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '20%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.38,
    shadowRadius: 3,
 
  },


});
