import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import ImageQuestion from '../../components/image_question/ImageQuestion';
import Question from '../../components/question/Question';
import UserSelector from '../../components/user_selector/UserSelector';
import NextButton from '../../components/next_button/NextButton';
import DropDownCourses from '../../components/drop_down_courses/DropDownCourses';
import DropDownSectors from '../../components/drop_down_sectors/DropDownSectors';
import AgeSelector from '../../components/age_selector/AgeSelector';

export function Home() {
  const [QuestionID, setQuestionID] = useState('01');
  const [TitleVisibility, setTitleVisibility] = useState(true);
  const [SelectUserVisibility, setSelectUserVisibility] = useState(true);
  const [DropDownCoursesVisibility, setDropDownCoursesVisibility] = useState(false);
  const [DropDownSectorsVisibility, setDropDownSectorsVisibility] = useState(false);
  const [AgeSelectorVisibility, setAgeSelectorVisibility] = useState(false);

  const handlePress = (newValue: string) => {
    setQuestionID(newValue);
  };

  useEffect(() => {
    setTitleVisibility(QuestionID === '01');
    setSelectUserVisibility(QuestionID === '01');
    setDropDownCoursesVisibility(QuestionID === '02');
    setDropDownSectorsVisibility(QuestionID === '03');
    setAgeSelectorVisibility(QuestionID === '04');
  }, [QuestionID]);


  return (
    <View style={styles.container}>
      <View style={styles.containertitle}>
        {TitleVisibility && <Text style={styles.title}>Bem-Vindo</Text>}
      </View>

      <ImageQuestion ImageKey={QuestionID} />

      <Question textKey={QuestionID} />

      <View>
        {SelectUserVisibility && (
          <UserSelector/>
        )}
      </View>

      <View>
        {DropDownCoursesVisibility && <DropDownCourses/>}
      </View>

      <View>
        {DropDownSectorsVisibility && <DropDownSectors/>}
      </View>

      <View>
          {AgeSelectorVisibility && <AgeSelector/>}
      </View>

      <NextButton OptionKey={QuestionID}  onPressCallback={handlePress}/>
    </View>
  );
}
