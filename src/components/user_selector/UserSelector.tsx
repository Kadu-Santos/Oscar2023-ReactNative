import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { styles } from './styles';

interface UserSelectorProps {
  onUserSelected: (value: string) => void;
}

const UserSelector: React.FC<UserSelectorProps> = ({ onUserSelected }) => {
  const [chosenOption, setChosenOption] = useState('');

  console.log(chosenOption); // chosenOption recebe o tipod o usuario

  const options = [
    { label: 'Aluno', value: 'Aluno' },
    { label: 'Servidor', value: 'Servidor' },
  ];

  return (
    <View style={styles.container}>
      <RadioForm
        radio_props={options}
        initial={-1}
        onPress={(value) => {
          setChosenOption(value);
          onUserSelected(value); // Notifica o componente pai sobre a seleção
        }}
        labelStyle={{ fontSize: 20, color: '#000' }}
        buttonSize={25}
        animation={false}
      />
    </View>
  );
};

export default UserSelector;


// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import RadioForm from 'react-native-simple-radio-button';
// import { styles } from './styles';

// const UserSelector = () => {

//   const [chosenOption, setChosenOption] = useState('');

//   console.log(chosenOption);
  

//   const options = [
//     { label: 'Aluno', value: 'Aluno' },
//     { label: 'Servidor', value: 'Servidor' },
//   ];

//   return (
//     <View style={styles.container}>

//       <RadioForm
//         radio_props={options}
//         initial={-1}
//         onPress={(value) => {
//           setChosenOption(value);
//         }}
        
//         labelStyle={{ fontSize: 20, color: '#000' }} // da erro, mas funciona
//         buttonSize={25}

//       />

      

//     </View>
//   );
// };

// export default UserSelector;