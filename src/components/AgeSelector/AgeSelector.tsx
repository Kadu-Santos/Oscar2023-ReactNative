import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Slider from "@react-native-community/slider";
import { styles } from './styles';

interface AgeSelectorProps {
  onChange?: (selectedOld: number) => void;
}

export function AgeSelector({ onChange }: AgeSelectorProps) {

  const [selectedAge, setSelectedAge] = useState(25);

  const onSliderChange = (value: number) => {
    setSelectedAge(value);
    if (onChange) {
      onChange(value);
    }
  };

  const onTextInputChange = (text: string) => {
    const age = parseInt(text, 10);
    if (!isNaN(age) && age >= 14 && age <= 85) {
      setSelectedAge(age);
      if (onChange) {
        onChange(age);
      }
    }
  };

  return (
    <View style={styles.container}>

      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={85}
        thumbTintColor='#549bef'
        minimumTrackTintColor='#448ce0'
        step={1}
        value={selectedAge}
        onValueChange={onSliderChange}
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
