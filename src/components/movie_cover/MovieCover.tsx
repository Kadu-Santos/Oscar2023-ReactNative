import { View, Image, TextProps} from 'react-native';
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