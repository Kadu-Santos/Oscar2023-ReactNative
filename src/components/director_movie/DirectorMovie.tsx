import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";
import NameDirectorOptions from "./NameDirectorOptions";

interface DirectorMovieProps extends TextProps {
  NameDirectorKey: string;
}

const getNameDirectorByKey = (key: string | undefined) => {
  const NameDirectorEntry = NameDirectorOptions.find((entry) => entry.key === key);
  return NameDirectorEntry ? NameDirectorEntry.value : null;
};

const DirectorMovie: React.FC<DirectorMovieProps> = (props) => {
  const { NameDirectorKey } = props;
  const NameDirectorValue = getNameDirectorByKey(NameDirectorKey);

  return (
    <View style={styles.container}>

        <View style={styles.containerDirector}> 
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/408/408426.png' }}
              style={styles.icon} 
            />

            <Text style={styles.text}>{NameDirectorValue}</Text>
        </View>

    </View>
  );
};

export default DirectorMovie;
        
        