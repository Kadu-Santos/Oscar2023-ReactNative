import { View, Text } from "react-native";
import { styles } from "./styles";
import ImageQuestion from "../../components/image_question/ImageQuestion";
import Question from "../../components/question/Question";
import Options from "../../components/options/Options"; 
// import initialImage from '../../images/initial.png'; 
import Title from "../../components/title/Title";
import RestartButton from "../../components/restart_button/RestartButton"

export function Home() {
    return(
        <View style={styles.container}>

            <Text style={styles.title}> Bem-Vindo </Text>

            <View style={styles.gambiarra}> 
            </View>

            {/* <Question textKey={"01"} />

            <Options OptionKey={"1"} /> */}

                    <RestartButton BackgroundOptionsKey={"001"}/>

            


        </View>
    );
}
