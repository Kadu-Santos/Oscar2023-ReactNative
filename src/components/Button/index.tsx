import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: color }} {...rest}>
        <Text style={styles.buttonText}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
