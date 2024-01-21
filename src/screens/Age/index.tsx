import { View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useState } from "react";
import { TitlePage } from "../../components/TitlePage";
import { ImageBody } from "../../components/ImageBody";
import { BodyText } from "../../components/BodyText";
import { Button } from "../../components/Button";
import { Back } from "../../components/Back";
import { AgeSelector } from "../../components/AgeSelector/AgeSelector";
import img from '../../../assets/images/questions/age.png'

import { useAppContext } from "../../components/AppContext";
import { addItem } from "../../data/datafunctions";

export function Age() {
    const navigation = useNavigation();
    const [selectedOld, setOld] = useState(25)
    const { globalKey } = useAppContext();

    const handleSetOld = (value: number) => {
        setOld(value)
    }

    const handleNextButtonPress = () => {
        if (globalKey && selectedOld) {
            addItem(globalKey, { old: selectedOld.toString() });
            navigation.navigate("QuestionsScreen");
        }
    };

    return(
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.goBack()}/>
                    <TitlePage title="Idade"/>
                    <ImageBody imagePath={img}/>
                    <BodyText text="Qual a sua idade?"/>
                    <AgeSelector onChange={handleSetOld}/>
                    <Button title="Começar" color="#b1c7f7" onPress={handleNextButtonPress}/>
                </View>
            </ScrollView>
        </View>
    );
}