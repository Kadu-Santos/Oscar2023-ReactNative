import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  imgMovieContainer:{
    width: '100%',
    position: 'relative',
    marginBottom: 5
  },

  imageMovie: {
    width: '100%',
    height: Dimensions.get("window").height / 2,
  },

  returnButton:{
    marginTop: StatusBar.currentHeight,
    marginLeft: '2%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    padding: '1%',
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    opacity: 0.7,
    borderRadius: 20,
  },

  returnTextButton:{
    color: '#000',
    margin: 3,
    textAlign: 'center'
  },

  containerInfo: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  iconStars: {
    width: 210,
    height: 36,
    marginBottom: 10
  },

  iconAge: {
    width: 50,
    height: 50,
    margin: 10
  },
  
});