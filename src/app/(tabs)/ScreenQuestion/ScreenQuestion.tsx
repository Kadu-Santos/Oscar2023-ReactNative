import React, { useState } from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";

import ImageQuestion from '../../../components/image_question/ImageQuestion';
import Question from '../../../components/question/Question';
import Options from '../../../components/options/Options';
import { Link } from "expo-router";

export default function ScreenQuestion() {
    const [QuestionID, setQuestionID] = useState('1');
    const test_2 =  '/(tabs)/ScreenQuestion/ScreenQuestion';

    const handlePress = (newValue: string, buttonPressed: number) => {

        if (newValue === '0') {
            console.log(QuestionID);
            console.log(buttonPressed);
        } else{
            setQuestionID(newValue);
        }
      };

    return(
        <View style={styles.container}>

            <ImageQuestion ImageKey={QuestionID}/>

            <Question textKey={QuestionID}/>


            <Link href={test_2}  asChild>
                <Options OptionKey={QuestionID} 
                    onPressCallback={handlePress}
                />
            </Link>

        </View>
    );
}

