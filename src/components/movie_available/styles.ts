import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {

  },

  containerAvailable: {
    justifyContent: 'center',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3%',

    marginTop: 100,

  },

  containerAvailableFixed: {
    width: '67%',
    justifyContent: 'center',
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0%',
  },
  
  text:{
    paddingBottom: '4%',
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
    width: '55%',
    height:'45%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: '0%',
  },
  
  iconAvailable: {
    width: '18%',
    height:'80%',
    margin: '3%',
    marginTop: '0%',
  },
  
  });
  