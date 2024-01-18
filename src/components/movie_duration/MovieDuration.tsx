import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";
import MovieDurationOptions from "./MovieDurationOptions";

interface MovieDurationProps extends TextProps {
  MovieDurationKey: string; 
}

const getMovieDurationByKey = (key: string | undefined) => {
  const MovieDurationEntry = MovieDurationOptions.find((entry) => entry.key === key);
  return MovieDurationEntry ? MovieDurationEntry.value : null;
};


const MovieDuration: React.FC<MovieDurationProps> = (props) => {
  const { MovieDurationKey } = props;
  const MovieDurationValue = getMovieDurationByKey(MovieDurationKey);

  return (
    <View style={styles.container}>

        <View style={styles.containerDuration}> 
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3964/3964959.png' }}
              style={styles.icon} 
            />
            <Text style={styles.titulo}> DURAÇÃO </Text>
        </View>
            <Text style={styles.text}>{MovieDurationValue} m</Text>

      </View>
  );
};

export default MovieDuration;
        
        