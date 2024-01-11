import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '10%',
    marginTop: '4%',
    marginBottom: '10%'
  },

  containerAvailable: {
    justifyContent: 'center',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  containerAvailableFixed: {
    width: '67%',
    justifyContent: 'center',
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  text:{
    paddingBottom: '2%',
    paddingRight: '4%',
    paddingLeft: '2%',
    paddingTop:'5%', 
    textAlign: 'justify',
  
  },
  
  icon:{
    width: 25,
    height: 25,
    marginRight: '2%',
  },

  containerIoconAvailable: {
    width: '67%',
    height:'70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '3%'
  
  },
  
  iconAvailable: {
    width: '15%',
    height: '63%',
    margin: '2%',
    borderRadius: 7,

  },
  
  });
  