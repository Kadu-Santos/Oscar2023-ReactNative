import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";

interface MovieDescriptionProps extends TextProps {
  MovieDescription: string;
}


const MovieDescription: React.FC<MovieDescriptionProps> = (props) => {

  return (
    <View style={styles.container}>

        <View style={styles.containerDescription}> 
          <Image 
            source={{ uri: 'https://w7.pngwing.com/pngs/970/882/png-transparent-computer-icons-description.png' }}
            style={styles.icon} 
          />

          <Text style={styles.text}> {props.MovieDescription} </Text>
        </View>

      </View>
  );
};

export default MovieDescription;