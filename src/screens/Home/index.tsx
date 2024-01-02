import { View, Text } from "react-native";
import { styles } from "./styles";
import UserSelector from "../../components/user_selector/UserSelector";

 
export function Home() {
    return(
        <View>


            {/* <View style={styles.container}>
                <Text> Oscar 2023</Text>
            </View> */}
           
            <View>
                
            <UserSelector/>

            </View>


        </View>
    );
}
