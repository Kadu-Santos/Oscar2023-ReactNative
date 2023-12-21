import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";

interface DirectorMovieProps extends TextProps {
  NameDirector: string;
}


const DirectorMovie: React.FC<DirectorMovieProps> = (props) => {

  return (
    <View style={styles.container}>

        <View style={styles.containerDirector}> 
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1581/1581249.png' }}
              style={styles.icon} 
            />

            <Text style={styles.text}> {props.NameDirector} </Text>
        </View>

    </View>
  );
};

export default DirectorMovie;
        
        