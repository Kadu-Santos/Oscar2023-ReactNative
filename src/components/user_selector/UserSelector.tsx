import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { styles } from './styles';

const UserSelector = () => {

  const [chosenOption, setChosenOption] = useState('');

  console.log(chosenOption);
  

  const options = [
    { label: 'Aluno', value: 'Aluno' },
    { label: 'Servidor', value: 'Servidor' },
  ];

  return (
    <View style={styles.container}>

      <RadioForm
        radio_props={options}
        initial={-1}
        onPress={(value) => {
          setChosenOption(value);
        }}

      />

      

    </View>
  );
};

export default UserSelector;
