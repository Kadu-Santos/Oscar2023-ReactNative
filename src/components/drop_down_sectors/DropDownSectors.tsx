import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SelectList } from 'react-native-dropdown-select-list';

const DropDownSectors = () => {
  const [selectedOption, setSelectedOption] = useState<{ key: string; value: string } | null>(null);


  const dropdownOptions = [
    { key: '1', value: 'Direção Geral' },
    { key: '2', value: 'Coordenação de Gabinete' },
    { key: '3', value: 'Coordenação de Gestão de Pessoas - CGP' },
    { key: '4', value: 'Departamento Financeiro - Compras' },
    { key: '5', value: 'Direção de Ensino' },
    { key: '6', value: 'Diretoria de Pesquisa' },
    { key: '7', value: 'Diretoria de Extensão' },
    { key: '8', value: 'Docentes' },
    { key: '9', value: 'Setor de Estágio' },
    { key: '10', value: 'Núcleo Pedagógico' },
    { key: '11', value: 'CGAE' },
    { key: '12', value: 'Almoxarifado' },
    { key: '13', value: 'Biblioteca' },
    { key: '14', value: 'Secretaria' },
    { key: '15', value: 'Gestão de Tecnologia da Informação - CGTI' },
    { key: '16', value: 'Segurança - Vigilância' },
    { key: '17', value: 'Lavanderia' },
    { key: '18', value: 'Fadetec' },
    { key: '19', value: 'Outro: Qual?' },
  ];

  const handleDropdownChange = (value: { key: string; value: string } | null) => {
    setSelectedOption(value);
    let selectedSector = value;
    console.log('Opção selecionada:', selectedSector);
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

export default DropDownSectors;