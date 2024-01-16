import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageQuestion from '../../../components/image_question/ImageQuestion';
import Question from '../../../components/question/Question';
import Options from '../../../components/options/Options';
import { Link } from 'expo-router';
import FristOptionsRoute from "./FristOptionsRoute";
import SecondOptionsRoute from "./SecondOptionsRoute";
import { TouchableOpacity } from 'react-native';

export default function ScreenQuestion() {
  const [QuestionID, setQuestionID] = useState('1');
  const [ButtonID, setButtonID] = useState('');
  const [VoltarVisibility, setVoltarVisibility] = useState(false);

  const [returnroutes, setreturnroutes] = useState<string[]>([]);

  
  useEffect(() => {
    setVoltarVisibility(QuestionID !== '1');
  }, [QuestionID]);
  
  const getFristOptionsRouteByKey = (key: string | undefined) => {
    const FristOptionsRouteEntry = FristOptionsRoute.find((entry) => entry.key === key);
    return FristOptionsRouteEntry ? FristOptionsRouteEntry.value : '';
  };

  const getSecondOptionsRouteByKey = (key: string | undefined) => {
    const SecondOptionsRouteEntry = SecondOptionsRoute.find((entry) => entry.key === key);
    return SecondOptionsRouteEntry ? SecondOptionsRouteEntry.value : '';
  };

  const handlePress = (newValue: string, buttonPressed: number) => {
    setButtonID(buttonPressed === 1 ? '1' : '2');
    
    if (newValue === '0') {
      if (buttonPressed === 1) {
        const FristOP = getFristOptionsRouteByKey(QuestionID);
      } else {
        const SecondOP = getSecondOptionsRouteByKey(QuestionID);
      }
    } else {
      const previouskey: string = QuestionID;
      setreturnroutes([...returnroutes, previouskey]);
      setQuestionID(newValue);
    }
  };

  const actionVoltar = () => {
    if (returnroutes.length > 0) {
      const ultimoElemento = returnroutes.slice(-1)[0];
      setQuestionID(ultimoElemento);
      const novoArray = returnroutes.slice(0, -1);
      setreturnroutes(novoArray);
    }
  }
  
  return (

      <View style={styles.container}>

        { VoltarVisibility &&
            <View style={styles.containerReturn}>
              <TouchableOpacity 
                style={styles.return} 
                onPress={actionVoltar}
              >
    
                <Text style={styles.returnTxt}>
                  Voltar
                </Text>
    
              </TouchableOpacity>
            </View>
          }

        <ImageQuestion ImageKey={QuestionID} />

        <Question textKey={QuestionID} />

        {/* <Link href='/(tabs)/ScreenMovie/ScreenMovie' asChild>
          <Options OptionKey={QuestionID} onPressCallback={handlePress} />
        </Link> */}

      <Options OptionKey={QuestionID} onPressCallback={handlePress} />

      </View>
    
  );
}