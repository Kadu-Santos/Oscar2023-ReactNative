import { Text, View, TextProps, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

interface RestartButtonProps extends TextProps {
  BackgroundColorBtn: string;
}

const RestartButton: React.FC<RestartButtonProps> = (props) => {


  return (
    <View  style={styles.container}> 


        <View style={styles.containerRestartButton}> 
         <TouchableOpacity 
          style={[
            styles.button,
            { backgroundColor: props.BackgroundColorBtn },
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

