import { View, Text, TextProps} from 'react-native';
import { styles } from "./styles";

interface TitleProps extends TextProps {
  Title: string;

}

const Title: React.FC<TitleProps> = (props) => {

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> {props.Title} </Text>
      </View> 

      </View>
  );
};

export default Title;