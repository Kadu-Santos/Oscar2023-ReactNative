import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';
import dropdownSectorOptions from './dropdownSectorOptions';

const DropDownSectors = () => {
  const [selectedOption, setSelectedOption] = useState<{ key: string; value: string } | null>(null);


  const handleDropdownChange = (value: { key: string; value: string } | null) => {
    setSelectedOption(value);
    let selectedSector = value;
    console.log('Opção selecionada:', selectedSector);
  };
  

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val: { key: string; value: string; } | null) => handleDropdownChange(val)}
        data={dropdownSectorOptions}
        save="value"
        searchPlaceholder="Pesquisar"
        placeholder="Escolha uma Opção"
      />

    </View>
  );
};

export default DropDownSectors;