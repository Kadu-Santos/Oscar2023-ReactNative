import { View, Image, TextProps,TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";

interface MovieCoverProps extends TextProps {
  ImageUrl: string;
  IconStars: string;
  IconAge: string;
}

const MovieCover: React.FC<MovieCoverProps> = (props) => {

  return (
    <View style={styles.container}>


      <View style={styles.containerimage}>
        <Image
          source={{ uri: props.ImageUrl }}
          style={styles.image}
        />

        <View style={styles.containerReturn}>
          <TouchableOpacity 
            style={styles.return} 
            //onPress = () add ação
          >

            <Text style={styles.returnTxt}>
              REINICIAR
            </Text>

          </TouchableOpacity>
        </View>


        <View style={styles.containerInfo}>

          <Image
            source={{ uri: props.IconStars }}
            style={styles.iconStars}
          />

          <Image
            source={{ uri: props.IconAge }}
            style={styles.iconAge}
          />

        </View>
      </View>

      </View>
  );
};

export default MovieCover;