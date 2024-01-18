import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
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
      <>
      <MovieCover Coverkey={ID} />
      <ScrollView style={styles.container}>
      <Title TitleKey={ID} />
      <MovieDescription MovieDescriptionKey={ID} />
      <DirectorMovie NameDirectorKey={ID} />
      <View style={styles.lado}>        
        <MovieDuration MovieDurationKey={ID} />
        <MovieGenre MovieGenreKey={ID} />
      </View>
      <MovieAvailable movieKey={ID} />
      <RestartButton BackgroundKey={ID} />
    </ScrollView>
    </>
  );
}


