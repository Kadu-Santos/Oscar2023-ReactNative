import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

interface MovieAvailableProps {
  movieKey: string; 
}


const MovieAvailable: React.FC<MovieAvailableProps> = ({ movieKey }) => {

  const [StarPlusVisibility, setStarPlusVisibility] = useState(false);
  const [ParamountPlusVisibility, setParamountPlusVisibility] = useState(false);
  const [AppleTvVisibility, setAppleTvVisibility] = useState(false);
  const [AmazomPrimeVisibility, setAmazomPrimeVisibility] = useState(false);
  const [GooglePlayVisibility, setGooglePlayVisibility] = useState(false);
  const [TelecineVisibility, setTelecineVisibility] = useState(false);
  const [YoutubeVisibility, setYoutubeVisibility] = useState(false);
  const [HBOMaxVisibility, setHBOMaxVisibility] = useState(false);
  const [DisneyPlusVisibility, setDisneyPlusVisibility] = useState(false);
  const [NetflixVisibility, setNetflixVisibility] = useState(false);

    useEffect(() => {
      setStarPlusVisibility(movieKey === '1');
      setParamountPlusVisibility(movieKey === '2' || movieKey === '3');
      setAppleTvVisibility(movieKey === '2' || movieKey === '3' || movieKey === '10' || movieKey === '4' || movieKey === '5' || movieKey === '6' || movieKey === '7' || movieKey === '9' || movieKey === '12' || movieKey === '14');
      setAmazomPrimeVisibility(movieKey === '2' || movieKey === '3' || movieKey === '4' || movieKey === '5' || movieKey === '6' || movieKey === '7' || movieKey === '9' || movieKey === '10' || movieKey === '12' || movieKey === '14');
      setGooglePlayVisibility(movieKey === '2' || movieKey === '3' || movieKey === '4' || movieKey === '5' || movieKey === '6' || movieKey === '7' || movieKey === '9' || movieKey === '12' || movieKey === '14');
      setTelecineVisibility(movieKey === '3' || movieKey === '12');
      setYoutubeVisibility(movieKey === '2' || movieKey === '4' || movieKey === '14');
      setHBOMaxVisibility(movieKey === '6');
      setDisneyPlusVisibility(movieKey === '7' || movieKey === '11');
      setNetflixVisibility(movieKey === '8' || movieKey === '2' || movieKey === '13');

    }, [movieKey]);

  return (
    <View style={styles.container}>
      <View style={styles.containerAvailable}>
        <View style={styles.containerAvailableFixed}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845752.png' }}
            style={styles.icon} 
          />
          <Text style={styles.titulo}>DISPONIVEL</Text>
        </View>

          <View style={styles.containerIoconAvailable}>

            {StarPlusVisibility && 
              <Image 
                source={require('./images/StarPlus.png')}
                style={styles.iconAvailable} 
              />
            }

            {ParamountPlusVisibility &&
              <Image 
                source={require('./images/ParamountPlus.png')}
                style={styles.iconAvailable} 
              />
            }

            {AppleTvVisibility && 
              <Image 
                source={require('./images/AppleTv.png')}
                style={styles.iconAvailable} 
              />
            }

            {AmazomPrimeVisibility && 
              <Image 
                source={require('./images/AmazomPrime.png')}
                style={styles.iconAvailable} 
              />
            }

            { GooglePlayVisibility && 
              <Image 
                source={require('./images/GooglePlay.png')}
                style={styles.iconAvailable} 
              />
            }

            {TelecineVisibility && 
              <Image
              source={require('./images/Telecine.png')}
                style={styles.iconAvailable} 
              />
            }

            {YoutubeVisibility && 
              <Image 
                source={require('./images/Youtube.png')}
                style={styles.iconAvailable} 
              />
            }

            {HBOMaxVisibility && 
              <Image 
                source={require('./images/HBOMax.png')}
                style={styles.iconAvailable} 
              />
            }

            {DisneyPlusVisibility && 
              <Image 
                source={require('./images/DisneyPlus.png')}
                style={styles.iconAvailable} 
              />
            }

            {NetflixVisibility && 
              <Image 
                source={require('./images/Netflix.png')}
                style={styles.iconAvailable} 
              />
            }

          </View>

      </View>
    </View>
  );
};

export default MovieAvailable;
