import { View, Text, TextProps} from 'react-native';
import { styles } from "./styles";
import TitleOptions from './TitleOptions';

interface TitleProps extends TextProps {
  TitleKey: string;
}

const getQuestioByKey = (key: string | undefined) => {
  const TitleEntry = TitleOptions.find((entry) => entry.key === key);
  return TitleEntry ? TitleEntry.value : null;
};

const Title: React.FC<TitleProps> = (props) => {
  const { TitleKey } = props;
  const TitleValue = getQuestioByKey(TitleKey);

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{TitleValue}</Text>
      </View> 

      </View>
  );
};

export default Title;