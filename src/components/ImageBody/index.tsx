import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

interface ImageQuestion {
  imagePath: ImageSourcePropType;
}

export function ImageBody({imagePath}:ImageQuestion) {

  return (
    
    <View> 

        <View  style={styles.imgQuestionContainer}> 

          <Image 
            source={imagePath}
            style={styles.image}
          />
          
        </View> 

    </View>
  );
}
