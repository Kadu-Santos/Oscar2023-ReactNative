import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";


interface MyComponentProps extends TextProps {
  //define os valores que o props vai receber
  TextOption1: string;
  TextOption2: string;
  BackgroundColorBtn: string;
}




const Options: React.FC<MyComponentProps> = (props) => {


  return (
    <View  style={styles.container}>


      <View style={styles.optionContainer}>
         <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: props.BackgroundColorBtn },
            { borderRadius: 20 },
          ]}
          // onPress = () realizar função quando clicar
          >
          <Text style={styles.text}>{props.TextOption1}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.button2,
            { backgroundColor: props.BackgroundColorBtn },
            { borderRadius: 20 },
          ]}
          // onPress = () realizar função quando clicar
          >
          <Text style={styles.text}>{props.TextOption2}</Text>
        </TouchableOpacity>
      </View>


    </View>


  );
};


export default Options;
