import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";
import MovieGenreOptions from "./MovieGenreOptions";

interface MovieGenreProps extends TextProps {
  MovieGenreKey: string;
}

const getMovieGenreByKey = (key: string | undefined) => {
  const MovieGenreEntry = MovieGenreOptions.find((entry) => entry.key === key);
  return MovieGenreEntry ? MovieGenreEntry.value : null;
};


const MovieGenre: React.FC<MovieGenreProps> = (props) => {
  const { MovieGenreKey } = props;
  const MovieGenreValue = getMovieGenreByKey(MovieGenreKey);

  return (
    <View style={styles.container}>

      <View style={styles.containerGenre}> 
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8616/8616806.png'}}
          style={styles.icon} 
        />

         <Text style={styles.text}>{MovieGenreValue}</Text>
      </View>

      </View>
  );
};

export default MovieGenre;
        
        