import { View, Text } from "react-native";
import { styles } from "./styles";
import MovieDescription from "../../components/movie_description/MovieDescription";
import DirectorMovie from "../../components/director_movie/DirectorMovie";
import MovieDuration from "../../components/movie_duration/MovieDuration";
import MovieGenre from "../../components/movie_genre/MovieGenre";
import MovieAvailable from "../../components/movie_available/MovieAvailable";
import ImageQuestion from "../../components/image_question/ImageQuestion";
import MovieCover from "../../components/movie_cover/MovieCover";
import NextButton from "../../components/next_button/NextButton"




export function Home() {
    return(
        <View style={styles.container}>

        <ImageQuestion ImageKey={"10"}/>

        <MovieDescription MovieDescriptionKey={"1"}/>

        <DirectorMovie NameDirectorKey={"1"}/>
                
        <MovieDuration MovieDurationKey={"1"}/>

        <MovieGenre MovieGenreKey={"1"}/>

        {/* <MovieCover Coverkey={"1"}/> */}

        <NextButton OptionKey={"1"}/>

        </View>
    );
}
