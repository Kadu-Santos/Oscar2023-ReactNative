import { View, Text } from "react-native";
import { styles } from "./styles";
import DropDownSectors from "../../components/drop_down_sectors/DropDownSectors";

 
export function Home() {
    return(
        <View>


            {/* <View style={styles.container}>
                <Text> Oscar 2023</Text>
            </View> */}
           
            <View>
                
                <DropDownSectors/>

            </View>


        </View>
    );
}
