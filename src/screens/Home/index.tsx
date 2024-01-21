import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useEffect } from "react";

import { useAppContext } from "../../components/AppContext";
import { generateSequentialKey } from "../../data/datafunctions";

import { Button } from "../../components/Button";
import { TitlePage } from "../../components/TitlePage";
import { BodyText } from "../../components/BodyText";
import { ImageBody } from "../../components/ImageBody";
import img from '../../../assets/images/questions/initial.png'

export function Home() {

    const navigation = useNavigation();
    const { setKey } = useAppContext();

    useEffect(() => {
        const fetchData = async () => {
            const key = await generateSequentialKey();
            setKey(key);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <TitlePage title="Bem-Vindo" />
                    <ImageBody imagePath={img} />
                    <BodyText text="Qual a sua função no IFNMG?" />
                    <Button title="Aluno" color="#ffc0b7" onPress={() => (navigation.navigate('Student'))} />
                    <Button title="Servidor" color="#ffc0b7" onPress={() => (navigation.navigate('Employee'))} />
                    <TouchableOpacity style={styles.termsButton} onPress={() => (navigation.navigate('TermsAndServices'))}>
                        <Text style={styles.linkTerms}>Termos e serviços</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}