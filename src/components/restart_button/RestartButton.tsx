import { Text, View, TextProps, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import BackgroundOptions from '../options/BackgroundOptions';

interface RestartButtonProps extends TextProps {
  BackgroundOptionsKey: string;
}

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

const RestartButton: React.FC<RestartButtonProps> = (props) => {
  const { BackgroundOptionsKey } = props;
  const BackgroundOptionsValue = getBackgroundOptionsByKey(BackgroundOptionsKey);

  return (
    <View  style={styles.container}> 


        <View style={styles.containerRestartButton}> 
         <TouchableOpacity 
          style={[
            styles.button,
            {backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : themes.colors.default  },
            { borderRadius: 20 },
          ]}
          //onPress = () add ação do botão
          >
          <Text style={styles.textBtn}>REINICIAR</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
};

export default RestartButton;

