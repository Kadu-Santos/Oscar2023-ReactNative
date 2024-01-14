import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from "@react-native-community/slider";
import { styles } from './styles';

export function AgeSelector() {
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

  return (
    <View style={styles.container}>

      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={85}
        thumbTintColor='#549bef'
        minimumTrackTintColor = '#448ce0'
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
