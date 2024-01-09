import { Text, View, TextProps, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import themes from "../../Styles/theme"
import BackgroundOptions from './BackgroundOptions';

interface RestartButtonProps extends TextProps {
  BackgroundKey: string ;
  // onPressCallback: (key: string) => void; 
}

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};

//teste ---------------------------

// const testeOptions = [
  
//   { key: '1', value: '3' },
//   { key: '2', value: '1' },
//   { key: '3', value: '2' },
// ];

// const gettesteOptionsByKey = (key: string | undefined) => {
//   const TESTEEntry = testeOptions.find((entry) => entry.key === key);
//   return TESTEEntry ? TESTEEntry.value : '';
// };


const RestartButton: React.FC<RestartButtonProps> = (props) => {
  // const { BackgroundKey, onPressCallback } = props;
  const { BackgroundKey} = props;
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

          // onPress={() => {
          //   const nextKey = gettesteOptionsByKey(BackgroundKey);
          //   onPressCallback(nextKey);
          // }}
        > 

          <Text style={styles.textBtn}>REINICIAR</Text>
        </TouchableOpacity>

      </View>

    </View>

  );
};

export default RestartButton;

