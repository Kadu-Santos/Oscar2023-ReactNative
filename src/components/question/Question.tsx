import React from 'react';
import { Text, View, TextProps } from 'react-native';
import { styles } from "./styles";
import ArrayQuestions from './ArrayQuestions';

interface QuestionProps extends TextProps {
  textQuestionKey: string; 
}


const getQuestioByKey = (key: string | undefined) => {
  const questionEntry = ArrayQuestions.find((entry) => entry.key === key);
  return questionEntry ? questionEntry.value : null;
};

const Question: React.FC<QuestionProps> = (props) => {
  const { textQuestionKey } = props;
  const QuestionValue = getQuestioByKey(textQuestionKey);

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{QuestionValue}</Text>
      </View>
    </View>
  );
};

export default Question;
