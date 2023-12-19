import { Text, View, TextProps } from 'react-native';
import { styles } from "./styles";

interface QuestionProps extends TextProps {
  TextQuestion: string;
}

const Question: React.FC<QuestionProps> = (props) => {


  return (
    <View  style={styles.container}> 


      <View  style={styles.questionContainer}> 
        <Text style={styles.question}> {props.TextQuestion} </Text>
      </View>

    </View>

  );
};

export default Question;

