import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";
import MovieDescriptionOptions from "./MovieDescriptionOptions";

interface MovieDescriptionProps extends TextProps {
  MovieDescriptionKey: string;
}

const getMovieDescriptionByKey = (key: string | undefined) => {
  const MovieDescriptionEntry = MovieDescriptionOptions.find((entry) => entry.key === key);
  return MovieDescriptionEntry ? MovieDescriptionEntry.value : null;
};


const MovieDescription: React.FC<MovieDescriptionProps> = (props) => {
  const { MovieDescriptionKey } = props;
  const MovieDescriptionValue = getMovieDescriptionByKey(MovieDescriptionKey);

  return (
    <View style={styles.container}>

        <View style={styles.containerDescription}> 
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1642/1642358.png' }}
            style={styles.icon} 
          />

          <Text style={styles.text}>{MovieDescriptionValue}</Text>
        </View>

      </View>
  );
};

export default MovieDescription;