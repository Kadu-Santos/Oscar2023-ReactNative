import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import ImageQuestion from '../../components/image_question/ImageQuestion';
import Question from '../../components/question/Question';
import UserSelector from '../../components/user_selector/UserSelector';
import NextButton from '../../components/next_button/NextButton';
import DropDownCourses from '../../components/drop_down_courses/DropDownCourses';
import DropDownSectors from '../../components/drop_down_sectors/DropDownSectors';
import AgeSelector from '../../components/age_selector/AgeSelector';
import { Link } from "expo-router";

export default function Home() {
  const [QuestionID, setQuestionID] = useState('01');
  const [Question_1_Visibility, setQuestion_1_Visibility] = useState(true);
  const [DropDownCoursesVisibility, setDropDownCoursesVisibility] = useState(false);
  const [DropDownSectorsVisibility, setDropDownSectorsVisibility] = useState(false);
  const [Question_4_Visibility, setQuestion_4_Visibility] = useState(false);
  const [ButtonVisibility, setButtonVisibility] = useState(false);
  const [TypeUser, setTypeUser] = useState('');

  const handlePress = (newValue: string) => {

    if (newValue === '0') {
        setQuestionID(TypeUser === 'Aluno' ? '02' : '03');
    } else{
        setQuestionID(newValue);
    }
  };

  useEffect(() => {
    setQuestion_1_Visibility(QuestionID === '01');
    setDropDownCoursesVisibility(QuestionID === '02');
    setDropDownSectorsVisibility(QuestionID === '03');
    setQuestion_4_Visibility(QuestionID === '04');
    setButtonVisibility(QuestionID !== '04');
  }, [QuestionID]);


  const handleUserSelected = (selectedValue: string) => {   
    setTypeUser(selectedValue);
  };

  return (
    <View style={styles.container}>
        <View style={styles.containertitle}>
            {Question_1_Visibility && <Text style={styles.title}>Bem-Vindo</Text>}
        </View>

        <ImageQuestion ImageKey={QuestionID} />

        <Question textKey={QuestionID} />

        {Question_1_Visibility &&  <UserSelector onUserSelected={handleUserSelected}/> }
        
        {DropDownCoursesVisibility && <DropDownCourses/>}
        
        {DropDownSectorsVisibility && <DropDownSectors/>}
        
        {Question_4_Visibility && <AgeSelector/>}
        
       {ButtonVisibility && <NextButton OptionKey={QuestionID}  onPressCallback={handlePress}/>}
         
        <View style={styles.containerBTN}>
            {Question_4_Visibility &&  
                <Link href="/(tabs)/ScreenQuestion/ScreenQuestion" asChild style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}> Começar </Text>
                    </TouchableOpacity>
                </Link>
            }
        </View>
        
    </View>
  );
}
