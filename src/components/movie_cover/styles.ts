import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    // backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '40%',
    marginLeft: -10, // gambiarra
    marginBottom: -10, // gambiarra
  },

  iconAge: {
    width: '8%',
  },
  
  });
  