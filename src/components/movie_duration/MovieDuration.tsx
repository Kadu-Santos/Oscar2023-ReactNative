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
              source={{ uri: 'https://img.freepik.com/vetores-premium/icone-de-vetor-de-relogio_712079-433.jpg' }}
              style={styles.icon} 
            />

            <Text style={styles.text}>{MovieDurationValue} m</Text>
        </View>

      </View>
  );
};

export default MovieDuration;
        
        