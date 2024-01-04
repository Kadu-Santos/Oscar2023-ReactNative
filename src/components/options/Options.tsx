import { Text, View, TouchableOpacity, TextProps} from 'react-native';
import { styles } from "./styles";


interface OptionsProps extends TextProps {
  //define os valores que o props vai receber
  KeyFristOption: string;
  KeySecondOption: string;
  KeyBackgroundOptions: string;
}

const FristGroupOptions = [
  { key: '1', value: 'Aluno' },
  { key: '2', value: 'Aluna' },
];


const getFristGroupOptionsByKey = (key: string | undefined) => {
  const FristOptionsEntry = FristGroupOptions.find((entry) => entry.key === key);
  return FristOptionsEntry ? FristOptionsEntry.value : null;
};

const SecondGroupOptions = [
  { key: '1', value: 'Servidor' },
  { key: '2', value: 'Servidora' },
];

const getSecondGroupOptionsByKey = (key: string | undefined) => {
  const SecondOptionsEntry = SecondGroupOptions.find((entry) => entry.key === key);
  return SecondOptionsEntry ? SecondOptionsEntry.value : null;
};

const BackgroundOptions = [
  { key: '1', value: '#33ffaa' },
  { key: '2', value: '#6c55eb' },
];

const getBackgroundOptionsByKey = (key: string | undefined) => {
  const BackgroundOptionsEntry = BackgroundOptions.find((entry) => entry.key === key);
  return BackgroundOptionsEntry ? BackgroundOptionsEntry.value : null;
};


const Options: React.FC<OptionsProps> = (props) => {
  
  const { KeyFristOption } = props;
  const FristOptionsValue = getFristGroupOptionsByKey(KeyFristOption);

  const { KeySecondOption } = props;
  const SecondOptionsValue = getSecondGroupOptionsByKey(KeySecondOption);

  const { KeyBackgroundOptions } = props;
  const BackgroundOptionsValue = getBackgroundOptionsByKey(KeyBackgroundOptions);

  return (
    <View  style={styles.container}>


      <View style={styles.optionContainer}>
         <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : '#dbd8d8' },
            { borderRadius: 20 },
          ]}
          // onPress = () realizar função quando clicar
          >
          <Text style={styles.text}>{FristOptionsValue}</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.button2,
            {  backgroundColor: BackgroundOptionsValue !== null ? BackgroundOptionsValue : '#dbd8d8'},
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
