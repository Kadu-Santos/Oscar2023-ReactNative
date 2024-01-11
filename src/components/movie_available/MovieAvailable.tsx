import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

interface MovieAvailableProps {
  movieKey: string; // Renomeei de 'movieKey' para 'moviemovieKey'
}


const MovieAvailable: React.FC<MovieAvailableProps> = ({ movieKey }) => {
//   // Função para gerar URLs dinâmicas com base no movieKey
//   const generateImageURL = (index: number) => {
//     // return `https://example.com/image${movieKey}_${index}.jpg`; // Substitua pela lógica real
//     return 'https://ssl.gstatic.com/kpui/watch/youtube_40x40.png';
//   };

//   // Mapeia o movieKey para a quantidade desejada de imagens
//   const imageCountMap: Record<string, number> = {
//     '1': 1,
//     '2': 6,
//     '3': 5,
//     '4': 4,
//     '5': 3,
//     '6': 4,
//     '7': 4,
//     '8': 1,
//     '9': 3,
//     '10': 2,
//     '11': 1,
//     '12': 4,
//     '13': 1,
//     '14': 4,
//   };

//   const numberOfImages = imageCountMap[movieKey] || 0; // Garante que haja um valor padrão se a chave não existir

//   const imageComponents = Array.from({ length: numberOfImages }, (_, index) => (
//     <View key={index.toString()} style={styles.iconAvailable}>
//       <Image
//         source={{ uri: generateImageURL(index) }}
//         style={{ width: '100%', height: '100%' }} // Ajuste o estilo conforme necessário
//       />
//     </View>
//   ));


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
          <Text style={styles.text}>Disponivel em:</Text>
        </View>

          <View style={styles.containerIoconAvailable}>

            {StarPlusVisibility && 
              <Image 
                source={{ uri: 'https://cdn-1.webcatalog.io/catalog/starplus/starplus-icon-filled-256.png?v=1675596386921' }}
                style={styles.iconAvailable} 
              />
            }

            {ParamountPlusVisibility &&
              <Image 
                source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c4/01/7c/c4017c7e-13ee-13eb-5577-7d9c77536d24/P_U002bINTLAppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/256x256bb.png' }}
                style={styles.iconAvailable} 
              />
            }

            {AppleTvVisibility && 
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/831/831330.png' }}
                style={styles.iconAvailable} 
              />
            }

            {AmazomPrimeVisibility && 
              <Image 
                source={{ uri: 'https://www.baixesoft.com/wp-content/uploads/2022/06/icone-do-prime-video-baixesoft.png' }}
                style={styles.iconAvailable} 
              />
            }

            { GooglePlayVisibility && 
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/256/720/720289.png' }}
                style={styles.iconAvailable} 
              />
            }

            {TelecineVisibility && 
              <Image 
                source={{ uri: 'https://cdn6.aptoide.com/imgs/1/8/b/18b7e9b4745ce3dac45ab8baefd43619_icon.png?w=128' }}
                style={styles.iconAvailable} 
              />
            }

            {YoutubeVisibility && 
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/256/1384/1384060.png' }}
                style={styles.iconAvailable} 
              />
            }

            {HBOMaxVisibility && 
              <Image 
                source={{ uri: 'https://cdn2.steamgriddb.com/icon/590fcadab00abacc5caaf30b51e91ad3/24/256x256.png' }}
                style={styles.iconAvailable} 
              />
            }

            {DisneyPlusVisibility && 
              <Image 
                source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/bb/5d/ab/bb5dab5a-f536-c9f6-5879-38ee4423fec0/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/256x256bb.png' }}
                style={styles.iconAvailable} 
              />
            }

            {NetflixVisibility && 
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/732/732228.png' }}
                style={styles.iconAvailable} 
              />
            }

          </View>

      </View>
    </View>
  );
};

export default MovieAvailable;
