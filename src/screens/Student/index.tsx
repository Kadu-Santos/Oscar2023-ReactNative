import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { TitlePage } from "../../components/TitlePage";
import { BodyText } from "../../components/BodyText";
import { ImageBody } from "../../components/ImageBody";
import { DropDown } from "../../components/DropDown/DropDown";
import { Back } from "../../components/Back";
import dropdownCoursesOptions from './dropdownCoursesOptions';
import img from '../../../assets/images/questions/student.png'

import { useAppContext } from "../../components/AppContext";
import { addItem } from "../../data/datafunctions";

interface DropDownOption {
    key: string;
    value: string;
}

export function Student() {
    const navigation = useNavigation();
    const [selectedCourse, setSelectedCourse] = React.useState<DropDownOption | null>(null);
    const { globalKey } = useAppContext();

    const handleDropDownChange = (value: DropDownOption | null) => {
        setSelectedCourse(value);
    };

    const handleNextButtonPress = () => {
        if (globalKey && selectedCourse) {
            addItem(globalKey, { typee: 'student', area: selectedCourse.toString()});
            navigation.navigate("Age");
        }
    };

    const isNextButtonDisabled = !selectedCourse;

    return (
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={() => navigation.goBack()}/>
                    <TitlePage title="Aluno" />
                    <ImageBody imagePath={img} />
                    <BodyText text="Está matriculado em qual curso?" />
                    <DropDown dataDropDown={dropdownCoursesOptions} onChange={handleDropDownChange}/>
                    <Button 
                        title="Próximo" 
                        color={isNextButtonDisabled ? "rgba(207, 161, 215, 0.5)" : "#cfa1d7"}
                        onPress={handleNextButtonPress}
                        disabled={isNextButtonDisabled}
                    />
                </View>
            </ScrollView>
        </View>
    );
}