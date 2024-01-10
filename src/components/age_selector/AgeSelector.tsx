import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from "@react-native-community/slider";
import { styles } from './styles';

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(25);
  

  const onAgeChange = (value: React.SetStateAction<number>) => {
    setSelectedAge(value);
  };


  const onTextInputChange = (text: string) => {
    const age = parseInt(text, 10);
    if (!isNaN(age) && age >= 14 && age <= 85) {
      setSelectedAge(age);
    }
  };

  console.log('Valor do Slider:', selectedAge); // selectedAge recebe a idade 
  


  return (
    <View style={styles.container}>

      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={85}
        step={1}
        value={selectedAge}
        onValueChange={onAgeChange}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={selectedAge.toString()}
        onChangeText={onTextInputChange}
        editable={false}
      />
    </View>
  );
};

export default AgeSelector;
