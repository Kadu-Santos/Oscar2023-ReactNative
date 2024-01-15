import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import MovieCover from '../../../components/movie_cover/MovieCover';
import Title from '../../../components/title/Title';
import MovieDescription from '../../../components/movie_description/MovieDescription';
import DirectorMovie from '../../../components/director_movie/DirectorMovie';
import MovieDuration from '../../../components/movie_duration/MovieDuration';
import MovieGenre from '../../../components/movie_genre/MovieGenre';
import MovieAvailable from '../../../components/movie_available/MovieAvailable';
import RestartButton from '../../../components/restart_button/RestartButton';

export default function ScreenMovie() {
  const [QuestionID, setQuestionID] = useState('1');
  
  return (
    <ScrollView style={styles.container}>
      <MovieCover Coverkey={QuestionID}/>
      <Title TitleKey={QuestionID}/>
      <MovieDescription MovieDescriptionKey={QuestionID}/>
      <DirectorMovie NameDirectorKey={QuestionID}/>
      <MovieDuration MovieDurationKey={QuestionID}/>
      <MovieGenre MovieGenreKey={QuestionID}/>
      <MovieAvailable movieKey={QuestionID}/>
      <RestartButton BackgroundKey={QuestionID}/>
    </ScrollView>
  );
}
