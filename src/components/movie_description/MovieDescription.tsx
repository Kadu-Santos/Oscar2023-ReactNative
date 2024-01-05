import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";
import MovieDescriptionOptions from "./MovieDescriptionOptions";

interface MovieDescriptionProps extends TextProps {
  MovieDescriptionKey: string;
}

const getMovieDescriptionKey = (key: string | undefined) => {
  const MovieDescriptionEntry = MovieDescriptionOptions.find((entry) => entry.key === key);
  return MovieDescriptionEntry ? MovieDescriptionEntry.value : null;
};


const MovieDescription: React.FC<MovieDescriptionProps> = (props) => {
  const { MovieDescriptionKey } = props;
  const MovieDescriptionValue = getMovieDescriptionKey(MovieDescriptionKey);

  return (
    <View style={styles.container}>

        <View style={styles.containerDescription}> 
          <Image 
            source={{ uri: 'https://w7.pngwing.com/pngs/970/882/png-transparent-computer-icons-description.png' }}
            style={styles.icon} 
          />

          <Text style={styles.text}>{MovieDescriptionValue}</Text>
        </View>

      </View>
  );
};

export default MovieDescription;