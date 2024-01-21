import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { TitlePage } from "../../components/TitlePage";
import { BodyText } from "../../components/BodyText";
import { ImageBody } from "../../components/ImageBody";
import { Back } from "../../components/Back";
import { DropDown } from "../../components/DropDown/DropDown";
import dropdownSectorOptions from "./dropdownSectorOptions";
import img from '../../../assets/images/questions/server.png'

import { useAppContext } from "../../components/AppContext";
import { addItem } from "../../data/datafunctions";

interface DropDownOption {
    key: string;
    value: string;
}

export function Employee() {
    const navigation = useNavigation();
    const [selectedSector, setSelectedSector] = React.useState<DropDownOption | null>(null);
    const { globalKey } = useAppContext();

    const handleDropDownChange = (value: DropDownOption | null) => {
        setSelectedSector(value);
    };

    const handleNextButtonPress = () => {
        if (globalKey && selectedSector) {
            addItem(globalKey, { typee: 'employee', area: selectedSector.toString()});
            navigation.navigate("Age");
        }
    };

    const isNextButtonDisabled = !selectedSector;

    return (
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.goBack()} />
                    <TitlePage title="Servidor" />
                    <ImageBody imagePath={img} />
                    <BodyText text="Está alocado em qual setor?" />
                    <DropDown dataDropDown={dropdownSectorOptions} onChange={handleDropDownChange} />
                    <Button title="Próximo"
                        color={isNextButtonDisabled ? "rgba(206, 228, 133, 0.5)" : "#cee485"}
                        onPress={handleNextButtonPress}
                        disabled={isNextButtonDisabled} />
                </View>
            </ScrollView>
        </View>

    );
}