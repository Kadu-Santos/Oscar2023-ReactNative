import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React from "react";

import { Button } from "../../components/Button";
import { TitlePage } from "../../components/TitlePage";
import { BodyText } from "../../components/BodyText";
import { ImageBody } from "../../components/ImageBody";
import { DropDown } from "../../components/DropDown/DropDown";
import { Back } from "../../components/Back";
import dropdownCoursesOptions from './dropdownCoursesOptions';
import img from '../../../assets/images/questions/student.png'


export function Student() {
    const navigation = useNavigation();

    return (

        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.goBack()}/>
                    <TitlePage title="Aluno" />
                    <ImageBody imagePath={img} />
                    <BodyText text="Está matriculado em qual curso?" />
                    <DropDown dataDropDown={dropdownCoursesOptions}/>
                    <Button title="Próximo" color="#cfa1d7" onPress={() => navigation.navigate("Age")}/>
                </View>
            </ScrollView>
        </View>

    );
}