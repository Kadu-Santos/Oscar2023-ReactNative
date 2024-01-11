import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import ImageQuestion from '../../../components/image_question/ImageQuestion';
import Question from '../../../components/question/Question';
import Options from '../../../components/options/Options';
import { Link } from 'expo-router';
import FristOptionsRoute from "./FristOptionsRoute";
import SecondOptionsRoute from "./SecondOptionsRoute";

export default function ScreenQuestion() {
  const [QuestionID, setQuestionID] = useState('1');
  

  const getFristOptionsRouteByKey = (key: string | undefined) => {
    const FristOptionsRouteEntry = FristOptionsRoute.find((entry) => entry.key === key);
    return FristOptionsRouteEntry ? FristOptionsRouteEntry.value : '';
  };

  const getSecondOptionsRouteByKey = (key: string | undefined) => {
    const SecondOptionsRouteEntry = SecondOptionsRoute.find((entry) => entry.key === key);
    return SecondOptionsRouteEntry ? SecondOptionsRouteEntry.value : '';
  };

  const handlePress = (newValue: string, buttonPressed: number) => {
    if (newValue === '0') {
        if (buttonPressed === 1) {
            const FristOP = getFristOptionsRouteByKey(QuestionID);
        }else{
            const SecondOP = getSecondOptionsRouteByKey(QuestionID);
          
        }
    } else {
      setQuestionID(newValue);
    }
  };


  return (
    <View style={styles.container}>

      <ImageQuestion ImageKey={QuestionID} />

      <Question textKey={QuestionID} />

      {/* <Link href='/(tabs)/ScreenMovie/ScreenMovie' asChild>
        <Options OptionKey={QuestionID} onPressCallback={handlePress} />
      </Link> */}

      <Options OptionKey={QuestionID} onPressCallback={handlePress} />

    </View>
  );
}
