import { View, Text } from "react-native";
import { styles } from "./styles";
import ImageQuestion from "../../components/image_question/ImageQuestion";
import Question from "../../components/question/Question";
import Options from "../../components/options/Options"; 
// import initialImage from '../../images/initial.png'; 

export function Home() {
    return(
        <View style={styles.container}>

            <Text style={styles.title}> Bem-Vindo </Text>

            <View style={styles.gambiarra}> 
            </View>

            <Question textQuestionKey={"01"} />

            <Options 
                TextOption1={"Aluno"} 
                TextOption2={"Servidor"} 
                BackgroundColorBtn={"#7ccff6"}
            />


        </View>
    );
}
