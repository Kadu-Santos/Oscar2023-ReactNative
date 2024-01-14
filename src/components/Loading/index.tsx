import { ActivityIndicator, View } from "react-native";
import  theme from "../../global/Styles/theme"
import React from "react";
import { styles } from "./styles";

export function Loading(){
    return(
        <View style={styles.container}>
            <ActivityIndicator
                color={theme.colors.secondary}
                size={'large'}
            />
        </View>
    )
}