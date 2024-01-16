import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';
import dropdownSectorOptions from './dropdownSectorOptions';
import { Stringifier } from 'styled-components/dist/types';


interface DropDownSectorsProps {
  onSectorSelected: (value: string) => void;
}

const DropDownSectors: React.FC<DropDownSectorsProps> = ({ onSectorSelected }) => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
    let selectedSectors = value;
    console.log('Opção selecionada:', selectedSectors);
    onSectorSelected(selectedSectors);
    
  };
  

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val: string) => handleDropdownChange(val)}
        data={dropdownSectorOptions}
        save="value"
        searchPlaceholder="Pesquisar"
        placeholder="Escolha uma Opção"
      />

    </View>
  );
};

export default DropDownSectors;