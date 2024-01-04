import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import FristGroupOptions from "./FristGroupOptions";
import SecondGroupOptions from "./SecondGroupOptions";
import BackgroundOptions from "./BackgroundOptions";

interface OptionsProps extends TextProps {
  OptionKey: string;

}

const getFristGroupOptionsByKey = (key: string | undefined) => {
  const FristOptionsEntry = FristGroupOptions.find((entry) => entry.key === key);
  return FristOptionsEntry ? FristOptionsEntry.value : null;
};

const getSecondGroupOptionsByKey = (key: string | undefined) => {
  const SecondOptionsEntry = SecondGroupOptions.find((entry) => entry.key === key);
  return SecondOptionsEntry ? SecondOptionsEntry.value : null;
};


const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

const Options: React.FC<OptionsProps> = (props) => {

  const { OptionKey } = props;
  const FristOptionsValue = getFristGroupOptionsByKey(OptionKey);


  const SecondOptionsValue = getSecondGroupOptionsByKey(OptionKey);


  const BackgroundOptionsValue = getBackgroundOptionsByKey(OptionKey);

  return (
    <View  style={styles.container}>


      <View style={styles.optionContainer}>
         <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : themes.colors.default },
            { borderRadius: 20 },
          ]}
          // onPress = () realizar função quando clicar
          >
          <Text style={styles.text}>{FristOptionsValue}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.button2,
            {  backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : themes.colors.default},
            { borderRadius: 20 },
          ]}
          // onPress = () realizar função quando clicar
          >
          <Text style={styles.text}>{SecondOptionsValue}</Text>
        </TouchableOpacity>
      </View>


    </View>


  );
};


export default Options;
