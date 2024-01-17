import React, { useState, useEffect } from 'react';
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
import { getMovieKey } from '../global';

export default function ScreenMovie() {
  const [ID, setID] = useState('1');
  const moviekey = getMovieKey();

  useEffect(() => {
    setID(moviekey);
  }, [moviekey]);

  return (
    <ScrollView style={styles.container}>
      <MovieCover Coverkey={ID}/>
      <Title TitleKey={ID}/>
      <MovieDescription MovieDescriptionKey={ID}/>
      <DirectorMovie NameDirectorKey={ID}/>
      <MovieDuration MovieDurationKey={ID}/>
      <MovieGenre MovieGenreKey={ID}/>
      <MovieAvailable movieKey={ID}/>      
      <RestartButton BackgroundKey={ID}/>
    </ScrollView>
  );
}


