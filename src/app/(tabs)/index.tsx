import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { styles } from './styles';
import ImageQuestion from '../../components/image_question/ImageQuestion';
import Question from '../../components/question/Question';
import UserSelector from '../../components/user_selector/UserSelector';
import NextButton from '../../components/next_button/NextButton';
import DropDownCourses from '../../components/drop_down_courses/DropDownCourses';
import DropDownSectors from '../../components/drop_down_sectors/DropDownSectors';
import AgeSelector from '../../components/age_selector/AgeSelector';
import { Link } from "expo-router";
import TermsAndServices from '../../components/Terms_And_Services/index';

export default function Home() {
  const [QuestionID, setQuestionID] = useState('01');
  const [MainVisibility, setMainVisibility] = useState(false);
  const [Question_1_Visibility, setQuestion_1_Visibility] = useState(true);
  const [DropDownCoursesVisibility, setDropDownCoursesVisibility] = useState(false);
  const [DropDownSectorsVisibility, setDropDownSectorsVisibility] = useState(false);
  const [TermsAndServicesVisibility, setTermsAndServicesVisibility] = useState(false);
  const [Question_4_Visibility, setQuestion_4_Visibility] = useState(false);
  const [ButtonVisibility, setButtonVisibility] = useState(false);
  const [TypeUser, setTypeUser] = useState('');
  const [TypeCourse, setTypeCourse] = useState('');
  const [TypeSector, setTypeSector] = useState('');
  const [VoltarVisibility, setVoltarVisibility] = useState(false);
  const [title, settitle] = useState('Bem-Vindo');
  const newquestionID = TypeUser === 'Aluno' ? '02' : '03';

  const handlePressUser = (newValue: string) => {
    if (TypeUser !== '') {      
      if (newValue === '0') {
        setQuestionID(newquestionID);
        TitleValue(newquestionID);
      } else{
          setQuestionID(newValue);
          TitleValue(newValue);
      }
    }else{
      showAlert();
    }
  };

  const handlePressCourse = (newValue: string) => {
    if (TypeCourse !== '') {      
          setQuestionID(newValue);
          TitleValue(newValue);
    }else{
      showAlert();
    }
  };

  const handlePressSector = (newValue: string) => {
    if (TypeSector !== '') {      
          setQuestionID(newValue);
          TitleValue(newValue);
    }else{
      showAlert();
    }
  };

  const showAlert = () => {
    Alert.alert('Aviso', 'Por favor, selecione uma opção antes de continuar.', [{ text: 'OK' }], {
      cancelable: false,
    });
  };

  const actionVoltar = () =>{
      if (QuestionID === '02' || QuestionID === '03') {
        setQuestionID('01');
        settitle('Bem-vindo');
        setTypeUser('');
      }else{
          if (newquestionID === '02') {
            setQuestionID('02');
            settitle('Aluno');
            setTypeCourse('');
          }else{
            setQuestionID('03');
            settitle('Servidor');
            setTypeSector('');
          }
      }
  }

  const handlePressTerms = (newValue: string) => {
    TitleValue(newValue);
    setQuestionID(newValue);
  };

  const TitleValue = (key : string) =>{
    if (key === '01') {
      settitle('Bem-Vindo');
    }else if (key === '02') {
      settitle('Aluno');
    } else if (key === '03') {
      settitle('Servidor');
    }else {
      settitle('Idade');
    }
  };

  useEffect(() => {
    setMainVisibility(QuestionID !== '00');
    setQuestion_1_Visibility(QuestionID === '01');
    setDropDownCoursesVisibility(QuestionID === '02');
    setDropDownSectorsVisibility(QuestionID === '03');
    setQuestion_4_Visibility(QuestionID === '04');
    setButtonVisibility(QuestionID !== '04');
    setVoltarVisibility(QuestionID === '02' || QuestionID === '03' ||QuestionID === '04');
    setTermsAndServicesVisibility(QuestionID === '00');
  }, [QuestionID]);


  const handleUserSelected = (selectedValue: string) => {   
    setTypeUser(selectedValue);
  };

  const handleCourseSelected = (selectedValue: string) => {   
    setTypeCourse(selectedValue);
  };

  const handleSectorSelected = (selectedValue: string) => {   
    setTypeSector(selectedValue);
  };

  return (

    <ScrollView style={styles.container}>

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


        {MainVisibility &&
          <>
            <View style={styles.containertitle}>
              <Text style={styles.title}>{title}</Text>
            </View>

            <ImageQuestion ImageKey={QuestionID} />
            
            <Question textKey={QuestionID} />
          </>
        }



          {Question_1_Visibility &&  <UserSelector onUserSelected={handleUserSelected}/> }
          
          {DropDownCoursesVisibility && <DropDownCourses onCoursesSelected={handleCourseSelected}/>}
          
          {DropDownSectorsVisibility && <DropDownSectors onSectorSelected={handleSectorSelected}/>}
          
          {Question_4_Visibility && <AgeSelector/>}
          

          {Question_1_Visibility &&  
              <>
                <NextButton OptionKey={QuestionID} onPressCallback={handlePressUser} />
                <View style={styles.container_btn_termos}>
                  <TouchableOpacity 
                    style={styles.btn_termos}
                    onPress={() => setQuestionID('00')}
                  >
                    <Text style={styles.termos}>Termos e Serviços</Text>
                  </TouchableOpacity>
                </View>
              </>
          }

          {TermsAndServicesVisibility &&
              <TermsAndServices onPressCallback={handlePressTerms} />
          }

          {DropDownCoursesVisibility && 
              <NextButton OptionKey={QuestionID}  onPressCallback={handlePressCourse}/>
          }

          {DropDownSectorsVisibility && 
              <NextButton OptionKey={QuestionID}  onPressCallback={handlePressSector}/>
          }

          <View style={styles.containerBTN}>
              {Question_4_Visibility &&  
                  <Link href="/(tabs)/Question/ScreenQuestion" asChild style={styles.button}>
                      <TouchableOpacity>
                          <Text style={styles.text}> Começar </Text>
                      </TouchableOpacity>
                  </Link>
              }
          </View>
          
    </ScrollView>
  );
}
