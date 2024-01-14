import { View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useCallback, useState } from "react";

import { Back } from "../../components/Back";
import { BodyText } from "../../components/BodyText";

///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

type paramsProps = {
    movieKey: string;
}

export function Movies() {
    const navigation = useNavigation();
    const route = useRoute();
    const { movieKey } = route.params as paramsProps;


    return (
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.navigate('Home')} title="< Reiniciar"/>
                    <BodyText text={movieKey}/>
                </View>
            </ScrollView>
        </View>
    );
}
