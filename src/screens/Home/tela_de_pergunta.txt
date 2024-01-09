import React, { useState } from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles";

import ImageQuestion from '../../components/image_question/ImageQuestion';
import Question from '../../components/question/Question';
import Options from '../../components/options/Options';

// ------------------ IMPORTANTE --------------------------------
// todos os componentes estão passando string, se tiver que mudar para number
// mude o tipo na interface para number
// mude o tipo da key no verificador de arrya de  (key: string | undefined) para  (key: number | undefined)
// tire todas as aspas das key que estão presente nos arrays

// o ponto positivo de ser number é que se só puder pussuir uma página, a lógica fica mais simpes, so aterar o valor da variavel

//---------------------------------------------------------------



export function Home() {
    const [QuestionID, setQuestionID] = useState('1');

    const handlePress = (newValue: string) => {
        setQuestionID(newValue);
      };

    return(
        <View style={styles.container}>

            <ImageQuestion ImageKey={QuestionID}/>

            <Question textKey={QuestionID}/>

            <Options OptionKey={QuestionID} 
                
                onPressCallback={handlePress}
            />

        </View>
    );
}

