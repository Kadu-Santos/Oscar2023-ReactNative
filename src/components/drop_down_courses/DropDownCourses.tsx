import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';


const DropDownCourses = () => {
  const [selectedOption, setSelectedOption] = useState<{ key: string; value: string } | null>(null);
  

  const dropdownOptions = [
    { key: '1', value: 'Licenciatura em Ciências Biológicas' },
    { key: '2', value: 'Licenciatura em Matemática' },
    { key: '3', value: 'Licenciatura em Química' },
    { key: '4', value: 'Licenciatura em Física' },
    { key: '5', value: 'Licenciatura em Pedagogia' },
    { key: '6', value: 'Bacharelado em Medicina Veterinária' },
    { key: '7', value: 'Bacharelado em Engenharia Florestal' },
    { key: '8', value: 'Bacharelado em Engenharia de Alimentos' },
    { key: '9', value: 'Bacharelado em Sistemas de Informação' },
    { key: '10', value: 'Técnico em Informática' },
    { key: '11', value: 'Técnico em Agropecuária' },
    { key: '12', value: 'Técnico em Agroindústria' },
    { key: '13', value: 'Outro: Qual?' },
  ];

  const handleDropdownChange = (value: { key: string; value: string } | null) => {
    setSelectedOption(value);
    let selectedCourses = value;
    console.log('Opção selecionada:', selectedCourses);
  };
  

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val: { key: string; value: string; } | null) => handleDropdownChange(val)}
        data={dropdownOptions}
        save="value"
        searchPlaceholder="Pesquisar"
        placeholder="Escolha uma Opção"
      />

    </View>
  );
};

export default DropDownCourses;