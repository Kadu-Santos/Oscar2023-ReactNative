import { Dimensions, StyleSheet } from "react-native";

const percent = Dimensions.get('window').height < 641 ? 0.4 : 0.5;
const hImage =  percent * Dimensions.get('window').height

export const styles = StyleSheet.create({

  
  imgQuestionContainer: {
    display: 'flex',
    alignItems: 'center', 
  },
  
  image: {
    width: '100%', 
    height: hImage,
  },
});