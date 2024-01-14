import { View, ScrollView, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useCallback, useState } from "react";

import { ImageBody } from "../../components/ImageBody";
import { BodyText } from "../../components/BodyText";
import { Button } from "../../components/Button";
import { Back } from "../../components/Back";
import { QuestionData } from "./QuestionData";

function getColorByKey(key: string): string {
    return QuestionData[key]?.backgroundOption || '#fff';
}

function getTextByKey(key: string): string {
    return QuestionData[key]?.questionText || '';
}

function getValuesByKey(key: string): string[] {
    return QuestionData[key]?.options || ['', ''];
}

function getRouteButtonByKey(key: string): string[] {
    return QuestionData[key]?.buttonRoute || ['', ''];
}

function getImageByKey(key: string): ImageSourcePropType {
    return QuestionData[key]?.questionImage || '';
}


export function QuestionsScreen() {
    const navigation = useNavigation();
    const [questionKey, setQuestionKey] = useState("q.1");
    const [visitedPaths, setVisitedPaths] = useState<string[]>([]);

    const updateQuestion = useCallback((buttonKey: string) => {
        const btRoute = getRouteButtonByKey(questionKey);
        const nextQuestionKey = buttonKey === '0' ? btRoute[0] : btRoute[1];

        if(nextQuestionKey.charAt(0).toLowerCase() === 'f'){
            navigation.navigate('Movies', {movieKey: nextQuestionKey})
        }

        setVisitedPaths((prevPaths) => [...prevPaths, questionKey]);

        setQuestionKey(nextQuestionKey);
        setColorButton(getColorByKey(nextQuestionKey));
        setQuestionText(getTextByKey(nextQuestionKey));
        setBtOptions(getValuesByKey(nextQuestionKey));
        setImage(getImageByKey(nextQuestionKey));

    }, [questionKey]);

    const navigateBack = useCallback(() => {
        if (visitedPaths.length > 0) {
            const previousQuestion = visitedPaths.pop() || "q.1";

            setQuestionKey(previousQuestion);
            setColorButton(getColorByKey(previousQuestion));
            setQuestionText(getTextByKey(previousQuestion));
            setBtOptions(getValuesByKey(previousQuestion));
            setImage(getImageByKey(previousQuestion));

            setVisitedPaths((prevPaths) => [...prevPaths]);
        } else {

            navigation.goBack();
        }
    }, [visitedPaths, navigation]);

    const [colorButton, setColorButton] = useState(() => getColorByKey(questionKey));
    const [questionText, setQuestionText] = useState(() => getTextByKey(questionKey));
    const [btOptions, setBtOptions] = useState(() => getValuesByKey(questionKey));
    const [imgQuestion, setImage ] = useState(() => getImageByKey(questionKey))
    

    return (
        <View style={styles.box}>
            <ScrollView>
                <View style={styles.container}>
                    <Back onPress={navigateBack} />
                    <ImageBody imagePath={imgQuestion} />
                    <BodyText text={questionText} />
                    <Button title={btOptions[0]} color={colorButton} onPress={() => updateQuestion('0')} />
                    <Button title={btOptions[1]} color={colorButton} onPress={() => updateQuestion('1')} />
                </View>
            </ScrollView>
        </View>
    );
}
