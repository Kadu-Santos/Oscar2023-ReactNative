import { View, Text } from "react-native";
import { styles } from "./styles";
import AgeSelector from "../../components/age_selector/AgeSelector";

 
export function Home() {
    return(
        <View>


            {/* <View style={styles.container}>
                <Text> Oscar 2023</Text>
            </View> */}
           
            <View>
                
                <AgeSelector/>

            </View>


        </View>
    );
}
