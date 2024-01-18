import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

interface Detailprops {
  description: string;
  director: string;
  duration: string;
  genre: string;
}

const movie = require('../../../assets/icons/movieIconImage.png');
const desc = require('../../../assets/icons/descIconImage.png');
const popcorn = require('../../../assets/icons/popcornIconImage.png');
const clock = require('../../../assets/icons/clockIconImage.png');
const tv = require('../../../assets/icons/tvIconImage.png');

export function DetailMovie({ description, director, duration, genre }: Detailprops) {

  return (

    <View>
      <View style={styles.containerDescription}>
        <Image
          source={desc}
          style={styles.iconDesc}
        />
        <Text style={styles.textDesc}>{description}</Text>
      </View>

      <View style={styles.containerDD}>
        <View style={styles.containerDirDur}>
          <Image
            source={movie}
            style={styles.icon}
          />
          <Text style={styles.textDD}>{director}</Text>
        </View>
        <View style={styles.containerDirDur}>
          <Image
            source={clock}
            style={styles.icon}
          />
          <Text style={styles.textDD}>{duration}m</Text>
        </View>
      </View>

      <View style={styles.containerDD}>
        <Image
          source={popcorn}
          style={styles.icon}
        />
        <Text style={styles.textDD}>{genre}</Text>
      </View>
      <View style={styles.containerDD}>
      <Image 
            source={tv}
            style={styles.icon} 
          />
          <Text style={styles.textDD}>Disponivel em:</Text>
      </View>

    </View>
  );
}
