import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface BackProps {
  onPress: () => void;
  title?: string;
}

export function Back({ onPress, title = '< Voltar', ...rest }: BackProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
