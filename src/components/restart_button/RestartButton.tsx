import { Text, View, TextProps, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import BackgroundOptions from './BackgroundOptions';

interface RestartButtonProps extends TextProps {
  BackgroundKey: string ;
}

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

const RestartButton: React.FC<RestartButtonProps> = (props) => {
  const { BackgroundKey } = props;
  const BackgroundValue = getBackgroundOptionsByKey(BackgroundKey);

  return (
    <View  style={styles.container}> 


        <View style={styles.containerRestartButton}> 
         <TouchableOpacity 
          style={[
            styles.button,
            {backgroundColor: BackgroundValue !== null ? BackgroundValue : themes.colors.default  },
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

