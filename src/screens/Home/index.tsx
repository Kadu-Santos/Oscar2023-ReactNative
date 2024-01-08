import { View, Text } from "react-native";
import { styles } from "./styles";
import MovieDescription from "../../components/movie_description/MovieDescription";
import DirectorMovie from "../../components/director_movie/DirectorMovie";
import MovieDuration from "../../components/movie_duration/MovieDuration";
import MovieGenre from "../../components/movie_genre/MovieGenre";
import MovieAvailable from "../../components/movie_available/MovieAvailable";
import ImageQuestion from "../../components/image_question/ImageQuestion";
import MovieCover from "../../components/movie_cover/MovieCover";
import RestartButton from "../../components/restart_button/RestartButton";

// ------------------ IMPORTANTE --------------------------------
// todos os componentes estão passando string, se tiver que mudar para number
// mude o tipo na interface para number
// mude o tipo da key no verificador de arrya de  (key: string | undefined) para  (key: number | undefined)
// tire todas as aspas das key que estão presente nos arrays

// o ponto positivo de ser number é que se só puder pussuir uma página, a lógica fica mais simpes, so aterar o valor da variavel

//---------------------------------------------------------------

export function Home() {

    const teste = '1'; 
    return(
        <View style={styles.container}>

        <ImageQuestion ImageKey={"10"}/>

        <MovieDescription MovieDescriptionKey={"1"}/>

        <DirectorMovie NameDirectorKey={"1"}/>
                
        <MovieDuration MovieDurationKey={"1"}/>

        <MovieGenre MovieGenreKey={"1"}/>

        {/* <MovieCover Coverkey={"1"}/> */}

        <RestartButton BackgroundKey={teste}/>
        

        </View>
    );
}
