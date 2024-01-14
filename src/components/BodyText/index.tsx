import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface TextPageProps {
  text: string;
}

export function BodyText({ text }: TextPageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
    
  );
}