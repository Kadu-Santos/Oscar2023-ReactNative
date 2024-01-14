import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface TitlePageProps {
  title: string;
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
