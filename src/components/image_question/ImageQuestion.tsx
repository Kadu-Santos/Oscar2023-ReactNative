import { View, Image, TextProps, Text } from 'react-native';
import { styles } from "./styles";

import img from "./images/initial.png"


const ImagesPath = [
  {Key: '1',  value: '../../images/initial.png'},
  {key: '2',  value: '../../images/initial.png'},

];

const getImagePathByKey = (key: string | undefined) => {
  const imageEntry = ImagesPath.find((entry) => entry.Key === key);
  return imageEntry ? imageEntry.value : null;
};

// interface ImageQuestionProps extends TextProps {
//   ImgQuestion: string;
// }


// const ImageQuestion: React.FC<ImageQuestionProps> = (props) => {
  const ImageQuestion = () => {


  const keyImage = '1';
  const imagePath = getImagePathByKey(keyImage);

  return (
    <View  style={styles.container}> 

      <View  style={styles.imgQuestionContainer}> 

      {/* {imagePath ? (
        <Image source={{ uri: imagePath ? String(imagePath) : undefined }} style={{ width: 100, height: 100 }} />
      ) : (
        <Text>Imagem não encontrada</Text>
      )}
       */}

          {/* <Image 
            source={{ uri: imagePath ? String(imagePath) : undefined}}
            style={styles.image}
            resizeMode='contain' // ou 'cover' dependendo da sua necessidade
          /> */}







      <Image 
            source={require('./images/initial.png')}
            style={styles.image}
             
          />
        
      </View>


    </View>

  );
};

export default ImageQuestion;