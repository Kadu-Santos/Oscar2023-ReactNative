import { View, Text } from "react-native";
import { styles } from "./styles";
import MovieCover from "../../components/movie_cover/MovieCover";

 
export function Home() {
    return(
        <View>


            <View style={styles.container}>
                <Text> Oscar 2023</Text>
            </View>
           
            <View>
                
                <MovieCover    
                    ImageUrl={"https://play-lh.googleusercontent.com/TpVpKoDfNQmrzvOdrv56hEDMDUolKwRKAk5RD3cYVH8DpcvYtN8GXkkmw7ayeepMZddk=w240-h480-rw"} 

                    IconStars={"https://static.vecteezy.com/system/resources/previews/010/366/280/non_2x/5-star-rating-review-star-transparent-free-png.png"} 

                    IconAge={"https://logodownload.org/wp-content/uploads/2017/07/classificacao-12-anos-logo-1.png"}
                />
           
            </View>


        </View>
    );
}
