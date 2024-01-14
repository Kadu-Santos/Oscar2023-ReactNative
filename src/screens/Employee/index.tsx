import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React from "react";

import { Button } from "../../components/Button";
import { TitlePage } from "../../components/TitlePage";
import { BodyText } from "../../components/BodyText";
import { ImageBody } from "../../components/ImageBody";
import { Back } from "../../components/Back";
import { DropDown } from "../../components/DropDown/DropDown";
import dropdownSectorOptions from "./dropdownSectorOptions";
import img from '../../../assets/images/questions/server.png'



export function Employee() {
    const navigation = useNavigation();

    return(
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.goBack()}/>
                    <TitlePage title="Servidor" />
                    <ImageBody imagePath={img} />
                    <BodyText text="Está alocado em qual setor?" />
                    <DropDown dataDropDown={dropdownSectorOptions}/>
                    <Button title="Próximo" color="#cee485" onPress={() => navigation.navigate("Age")}/>
                </View>
            </ScrollView>
        </View>
        
    );
}