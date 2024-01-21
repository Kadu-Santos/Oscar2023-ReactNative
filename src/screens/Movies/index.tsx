import { View, ScrollView, ImageSourcePropType, BackHandler, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import React, { useEffect } from "react";
import { DataMovie } from './MoviesData'
import { MovieData } from "../../@types/MovieData"

import { ImageMovie } from "../../components/ImageMovie";
import { BodyText } from "../../components/BodyText";
import { DetailMovie } from "../../components/DetailMovie";
import { Button } from "../../components/Button";
import { MovieAvailable } from "../../components/MovieAvailable";

import { addItem, generateSequentialKey } from "../../data/datafunctions";
import { useAppContext } from "../../components/AppContext";

export const getMovieByKey = (key: string): MovieData | undefined => {
    return DataMovie[key];
  };

type paramsProps = {
    movieKey: string;
}

export function MoviesScreen() {

    const route = useRoute();
    const { movieKey } = route.params as paramsProps;
    const navigation = useNavigation();
    const { globalKey, setKey } = useAppContext();
    
    const handleNextButtonPress = async () => {
        if (globalKey && title) {
            addItem(globalKey, { movie: title });
            const key = await generateSequentialKey();
            setKey(key)
            navigation.navigate("Home");
        }
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (route.name === 'MoviesScreen') {
                handleNextButtonPress();
                return true;
            }
            return false;
        });

        return () => backHandler.remove();
    }, [route, navigation]);

    const img = getMovieByKey(movieKey)?.movieImage;
    const clss = getMovieByKey(movieKey)?.movieAge;
    const star = getMovieByKey(movieKey)?.movieStars;
    const title = getMovieByKey(movieKey)?.movieTitle || '';
    const desc = getMovieByKey(movieKey)?.movieDescription || '';
    const duration = getMovieByKey(movieKey)?.movieDuration || '';
    const director = getMovieByKey(movieKey)?.movieDirector || '';
    const genre = getMovieByKey(movieKey)?.genre || '';

    return (
        <View style={styles.box}>
            <ScrollView>
                <ImageMovie movieImage={img} movieAge={clss} movieStars={star} />
                <View style={styles.container}>
                    <BodyText text={title} />
                    <DetailMovie duration={duration} director={director} genre={genre} description={desc}/>
                    <MovieAvailable keyMovie={movieKey}/>
                    <Button title="Reiniciar" color="#cdc388" onPress={handleNextButtonPress}/>
                </View>
            </ScrollView>
        </View>
    );
}
