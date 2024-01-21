import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';

interface DropDownOption {
  key: string;
  value: string;
}

interface DropDownProps {
  dataDropDown: DropDownOption[];
  onChange?: (selectedOption: DropDownOption | null) => void;
}

export function DropDown({ dataDropDown, onChange }: DropDownProps) {
  const [selectedOption, setSelectedOption] = useState<DropDownOption | null>(null);

  useEffect(() => {
    if (onChange) {
      onChange(selectedOption);
    }
  }, [selectedOption, onChange]);

  const handleDropdownChange = (value: { key: string; value: string } | null) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={(val: { key: string; value: string } | null) => handleDropdownChange(val)}
        data={dataDropDown}
        save="value"
        searchPlaceholder="Pesquisar"
        placeholder="Escolha uma Opção"
      />
    </View>
  );
}
