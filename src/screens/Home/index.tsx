import { View, Text } from "react-native";
import { styles } from "./styles";
import MovieGenre from "../../components/movie_genre/MovieGenre";

 
export function Home() {
    return(
        <View>


            <View style={styles.container}>
                <Text> Oscar 2023</Text>
            </View>
           
            <View>
                
            <MovieGenre 
                MovieGenre={"Drama / Ação"}
            />
           
            </View>


        </View>
    );
}
