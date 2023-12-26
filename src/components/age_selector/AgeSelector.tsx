import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from "@react-native-community/slider";
import { styles } from './styles';

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(25);

  const onAgeChange = (value: React.SetStateAction<number>) => {
    setSelectedAge(value);
  };

  const onSlidingComplete = (value: number) => {
    console.log('Valor final selecionado:', value);
    // Aqui você pode realizar qualquer ação necessária com o valor final selecionado
  };

  const onTextInputChange = (text: string) => {
    const age = parseInt(text, 10);
    if (!isNaN(age) && age >= 14 && age <= 85) {
      setSelectedAge(age);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectedValueText}>Idade: {selectedAge}</Text>
      <Slider
        style={styles.slider}
        minimumValue={14}
        maximumValue={85}
        step={1}
        value={selectedAge}
        onValueChange={onAgeChange}
        onSlidingComplete={onSlidingComplete}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={selectedAge.toString()}
        onChangeText={onTextInputChange}
      />
    </View>
  );
};

export default AgeSelector;
