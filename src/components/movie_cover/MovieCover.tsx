import { View, Image, TextProps,TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";
import { getAgeClasificatorByKey } from "./getAgeClasificatorByKey";
import CoversPath from "./CoversPath";
import { getStarsPathByKey } from "./getStarsPathByKey";

interface MovieCoverProps extends TextProps {
  Coverkey: string;
}

const getCoversPathByKey = (key: string | undefined) => {
  const CoversEntry = CoversPath.find((entry) => entry.key === key);
  return CoversEntry ? CoversEntry.value : null;
};

const MovieCover: React.FC<MovieCoverProps> = (props) => {
  const {Coverkey} = props;
  const age = getAgeClasificatorByKey(Coverkey);
  const cover = getCoversPathByKey(Coverkey);
  const stars = getStarsPathByKey(Coverkey);

  return (
    <View style={styles.container}>

      <View style={styles.containerimage}>
        <Image
          source={cover}
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
            source={stars}
            style={styles.iconStars}
          />

          <Image
            source={age}
            style={styles.iconAge}
          />

        </View>


      </View>

      </View>
  );
};

export default MovieCover;