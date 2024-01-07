import { View, Image, TextProps, Text } from 'react-native';
import { styles } from "./styles";
import ImagesPath from "./ImagesPath";

interface ImageQuestionProps extends TextProps {
  ImageKey: string; 
}

const getImagePathByKey = (key: string | undefined) => {
  const imageEntry = ImagesPath.find((entry) => entry.key === key);
  return imageEntry ? imageEntry.value : null;
};

  const ImageQuestion: React.FC<ImageQuestionProps> = (props) => {
    const {ImageKey} = props;
    const imagePath = getImagePathByKey(ImageKey);

  return (
    <View  style={styles.container}> 

        <View  style={styles.imgQuestionContainer}> 

          <Image 
            source={imagePath}
            style={styles.image}
          />
          
        </View> 

    </View>

  );
};

export default ImageQuestion;