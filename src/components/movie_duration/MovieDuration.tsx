import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";

interface MovieDurationProps extends TextProps {
  MovieDuration: string; // porém so deve entrar número
}


const MovieDuration: React.FC<MovieDurationProps> = (props) => {

  return (
    <View style={styles.container}>

        <View style={styles.containerDuration}> 
            <Image 
              source={{ uri: 'https://img.freepik.com/vetores-premium/icone-de-vetor-de-relogio_712079-433.jpg' }}
              style={styles.icon} 
            />

            <Text style={styles.text}> {props.MovieDuration} m </Text>
        </View>

      </View>
  );
};

export default MovieDuration;
        
        