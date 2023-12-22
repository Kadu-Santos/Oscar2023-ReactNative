import { View, Text, TextProps, Image} from 'react-native';
import { styles } from "./styles";

interface MovieAvailableProps extends TextProps {
  AvailableIn1: string;
  AvailableIn2: string;
  AvailableIn3: string;
}


const MovieAvailable: React.FC<MovieAvailableProps> = (props) => {

  return (
    <View style={styles.container}>

      <View style={styles.containerDisponivel}> 
        <View style={styles.containerDisponivelFixo}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/e8/c8/50/e8c8508ecb6668b065319d3d739f005d.jpg' }}
            style={styles.icon} 
          />

          <Text style={styles.text}>Disponivel em:</Text>
        </View>

        <View style={styles.containerIoconeDisponivel}>
          <Image 
            source={{ uri: props.AvailableIn1 }}
            style={styles.iconDisponivel} 
          />

          <Image 
            source={{ uri: props.AvailableIn2 }}
            style={styles.iconDisponivel} 
          />

          <Image 
            source={{ uri: props.AvailableIn3 }}
            style={styles.iconDisponivel} 
          />
        </View>

        {/* 
              Arrumar uma maneira de colocar varios props.AvailableIn, talvez com algo tipo o rernder item 
              OU definir um número fixa de locais disponiveis (tem um filme que tem uns 5 ou 6)
        */}
      
      </View>
       
    </View>
  );
};

export default MovieAvailable;
        
        