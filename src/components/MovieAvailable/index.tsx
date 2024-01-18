import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface MovieAvailableProps {
  keyMovie: string;
}

const streamingServices: { [key: string]: string[] } = {
  'f.1': ['StarPlus'],
  'f.2': ['AppleTV', 'Netflix', 'AmazonPrime', 'GooglePlay', 'Youtube', 'ParamountPlus'],
  'f.3': ['ParamountPlus', 'AmazonPrime', 'GooglePlay', 'Telecine'],
  'f.4': ['AppleTV', 'GooglePlay', 'Youtube', 'Netflix', 'AmazonPrime'],
  'f.5': ['AppleTV', 'GooglePlay', 'Youtube', 'Netflix', 'AmazonPrime'],
  'f.6': ['AppleTV', 'GooglePlay', 'HBOMax'],
  'f.7': ['AppleTV', 'AmazonPrime', 'GooglePlay', 'DisneyPlus'],
  'f.8': ['Netflix'],
  'f.9': ['AppleTV', 'AmazonPrime', 'GooglePlay'],
  'f.10': ['AppleTV'],
  'f.11': ['DisneyPlus'],
  'f.12': ['AmazonPrime', 'Telecine', 'GooglePlay'],
  'f.13': ['Netflix'],
  'f.14': ['AppleTV', 'AmazonPrime', 'GooglePlay', 'Youtube'],
};

const serviceImages: { [key: string]: string } = {
  StarPlus: require('../../../assets/icons/StarPlus.png'),
  ParamountPlus: require('../../../assets/icons/ParamountPlus.png'),
  AppleTV: require('../../../assets/icons/AppleTV.png'),
  AmazonPrime: require('../../../assets/icons/AmazonPrime.png'),
  GooglePlay: require('../../../assets/icons/GooglePlay.png'),
  Youtube: require('../../../assets/icons/YouTube.png'),
  Netflix: require('../../../assets/icons/Netflix.png'),
  Telecine: require('../../../assets/icons/Telecine.png'),
  HBOMax: require('../../../assets/icons/HBOMax.png'),
  DisneyPlus: require('../../../assets/icons/DysneyPlus.png'),
};

function getMovieDataByKey(key: string): string[] | null {
  return streamingServices[key] || null;
}

export function MovieAvailable({ keyMovie }: MovieAvailableProps) {

  const services = getMovieDataByKey('f.4');

  return (
    <View style={styles.containerAvailable}>
      {services && services.map((serviceName, index) => (
        <View key={index}>
          <Image
            source={serviceImages[serviceName] as ImageSourcePropType}
            style={styles.iconAvailable}
          />
        </View>
      ))}
    </View>
  );
};
