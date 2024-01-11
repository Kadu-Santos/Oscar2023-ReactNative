import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    display: 'flex',
  },

  containerReturn: {
    width: '20%',
    height: '3%',
    margin: '3%',
    marginBottom: '1%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 20, 
    zIndex: 2,
    padding: '1%',
    backgroundColor: '#D6D6D6',
    opacity: 0.7,
    textAlign: "center",
    borderRadius: 20
  },

  return: {
    marginTop: '2%',
    marginLeft: '2%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    padding: '1%',
    
  
  },

  returnTxt: {
    color: '#000',
    marginLeft: '10%',

  },

  containerimage: {
    width: '100%',
    position: 'relative', // Importante para posicionar elementos filhos relativos a este
   
  },

  image: {
    width: '100%',
    height: 500, // não sei pq mas aqui não aceita %
  },

  containerInfo: {
    height: '8%',
    margin: '3%',
    marginBottom: '1%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0, // Posicionado em relação à parte inferior da imagem
    zIndex: 2,
    padding: '1%',
    // opacity: 0.8,
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  iconStars: {
    width: '60%',
    height: 'auto',
    marginLeft: -10,

  },

  iconAge: {
    width: '10%',
    height: 'auto',
    marginRight: -10
  },
  
  });
  