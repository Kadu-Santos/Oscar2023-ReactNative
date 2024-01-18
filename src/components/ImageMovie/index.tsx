import { TouchableOpacity, Text, Image, View, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface ImageProps {
    movieImage: ImageSourcePropType;
    movieAge: ImageSourcePropType;
    movieStars: ImageSourcePropType;
}

export function ImageMovie({ movieImage, movieAge, movieStars }: ImageProps) {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.imgMovieContainer}>
                <Image source={movieImage} style={styles.imageMovie} />
            </View>
            <TouchableOpacity style={styles.returnButton}>
                <Text style={styles.returnTextButton} onPress={() => navigation.navigate('Home')}>
                    REINICIAR
                </Text>
            </TouchableOpacity>

            <View style={styles.containerInfo}>
                <Image
                    source={movieStars}
                    style={styles.iconStars}
                />

                <Image
                    source={movieAge}
                    style={styles.iconAge}
                />

            </View>
        </View>
    );
}
