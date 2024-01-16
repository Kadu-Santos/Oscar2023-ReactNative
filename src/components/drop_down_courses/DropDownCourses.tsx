import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';
import dropdownCoursesOptions from './dropdownCoursesOptions';

interface DropDownCoursesProps {
  onCoursesSelected: (value: string) => void;
}

const DropDownCourses: React.FC<DropDownCoursesProps> = ({ onCoursesSelected }) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
    let selectedCourses = value;
    console.log('Opção selecionada:', selectedCourses);
    onCoursesSelected(selectedCourses);
    
  };

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val: string) => handleDropdownChange(val)}
        data={dropdownCoursesOptions}
        save="value"
        searchPlaceholder="Pesquisar"
        placeholder="Escolha uma Opção"
      />
    </View>
  );
};

export default DropDownCourses;
