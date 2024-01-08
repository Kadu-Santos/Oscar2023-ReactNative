import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import BackgroundOptions from "./BackgroundOptions";

interface OptionsProps extends TextProps {
  OptionKey: string;

}

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

function TextValueOptions (key: string | undefined) {
  if (key === '4') {
    const TextValoue = 'Começar'
    return TextValoue;
  } else{
    const TextValoue = 'Próximo'
    return TextValoue;
  }
}

const Options: React.FC<OptionsProps> = (props) => {

  const { OptionKey } = props;
  const BackgroundOptionsValue = getBackgroundOptionsByKey(OptionKey);
  const TextButton = TextValueOptions(OptionKey);

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
          <Text style={styles.text}> {TextButton} </Text>
        </TouchableOpacity>
      </View>


    </View>


  );
};


export default Options;
