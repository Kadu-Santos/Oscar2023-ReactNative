import { View, Image, TextProps } from 'react-native';
import { styles } from "./styles";

interface ImageQuestionProps extends TextProps {
  ImgQuestion: string;
}

const ImageQuestion: React.FC<ImageQuestionProps> = (props) => {

  return (
    <View  style={styles.container}> 

      <View  style={styles.imgQuestionContainer}> 

          <Image 
            source={{ uri: props.ImgQuestion }}
            style={styles.image}
            resizeMode='contain' // ou 'cover' dependendo da sua necessidade
          />
        
      </View>


    </View>

  );
};

export default ImageQuestion;