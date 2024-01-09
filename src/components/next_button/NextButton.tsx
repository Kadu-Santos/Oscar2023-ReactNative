import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import BackgroundOptions from "./BackgroundOptions";
import OptionsRoute from './OptionsRoute'; 

interface OptionsProps extends TextProps {
  OptionKey: string;
  onPressCallback: (key: string) => void; 
}

const getOptionsRouteByKey = (key: string | undefined) => {
  const OptionsRouteEntry = OptionsRoute.find((entry) => entry.key === key);
  return OptionsRouteEntry ? OptionsRouteEntry.value : '';
};

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

function TextValueOptions (key: string | undefined) {
  if (key === '04') {
    const TextValoue = 'Começar'
    return TextValoue;
  } else{
    const TextValoue = 'Próximo'
    return TextValoue;
  }
}

const NextButton: React.FC<OptionsProps> = (props) => {

  const { OptionKey, onPressCallback } = props;
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
          onPress={() => {
            const nextKey = getOptionsRouteByKey(OptionKey);
            onPressCallback(nextKey);
          }}
          >
          <Text style={styles.text}> {TextButton} </Text>
        </TouchableOpacity>
      </View>


    </View>


  );
};


export default NextButton;
