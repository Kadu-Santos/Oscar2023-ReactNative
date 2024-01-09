import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import FristOptionsText from "./FristOptionsText";
import SecondOptionsText from "./SecondOptionsText";
import BackgroundOptions from "./BackgroundOptions";
import FristOptionsRoute from "./FristOptionsRoute";
import SecondOptionsRoute from "./SecondOptionsRoute";

interface OptionsProps extends TextProps {
  OptionKey: string;
  onPressCallback: (key: string) => void; 
}

const getFristOptionsTextByKey = (key: string | undefined) => {
  const FristOptionsTextEntry = FristOptionsText.find((entry) => entry.key === key);
  return FristOptionsTextEntry ? FristOptionsTextEntry.value : null;
};

const getFristOptionsRouteByKey = (key: string | undefined) => {
  const FristOptionsRouteEntry = FristOptionsRoute.find((entry) => entry.key === key);
  return FristOptionsRouteEntry ? FristOptionsRouteEntry.value : '';
};

const getSecondOptionsTextByKey = (key: string | undefined) => {
  const SecondOptionsTextEntry = SecondOptionsText.find((entry) => entry.key === key);
  return SecondOptionsTextEntry ? SecondOptionsTextEntry.value : null;
};

const getSecondOptionsRouteByKey = (key: string | undefined) => {
  const SecondOptionsRouteEntry = SecondOptionsRoute.find((entry) => entry.key === key);
  return SecondOptionsRouteEntry ? SecondOptionsRouteEntry.value : '';
};

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

const Options: React.FC<OptionsProps> = (props) => {

  const { OptionKey, onPressCallback } = props;
  const FristOptionsTextValue = getFristOptionsTextByKey(OptionKey);
  const SecondOptionsValue = getSecondOptionsTextByKey(OptionKey);
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
          onPress={() => {
            const nextKey = getFristOptionsRouteByKey(OptionKey);
            onPressCallback(nextKey);
          }}
          >
          <Text style={styles.text}>{FristOptionsTextValue}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.button2,
            {  backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : themes.colors.default},
            { borderRadius: 20 },
          ]}
          onPress={() => {
            const nextKey = getSecondOptionsRouteByKey(OptionKey);
            onPressCallback(nextKey);
          }}
          >
          <Text style={styles.text}>{SecondOptionsValue}</Text>
        </TouchableOpacity>
      </View>


    </View>


  );
};


export default Options;
