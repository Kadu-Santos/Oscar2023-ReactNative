import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";

interface MovieGenreProps extends TextProps {
  MovieGenre: string;
}


const MovieGenre: React.FC<MovieGenreProps> = (props) => {

  return (
    <View style={styles.container}>

      <View style={styles.containerGenre}> 
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1940/1940191.png'}}
          style={styles.icon} 
        />

         <Text style={styles.text}> {props.MovieGenre}</Text>
      </View>

      </View>
  );
};

export default MovieGenre;
        
        