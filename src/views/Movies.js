import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import MoviesTable from '../components/MoviesTable';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const BASE_URL = 'https://afternoon-brushlands-40101.herokuapp.com/api';

    async function fetchData() {
      const response = await fetch(`${BASE_URL}/movies`);
      const data = await response.json();
      console.log(data);
      setMovies(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Heading gridArea="title" as="h2" size="lg" my={5} marginLeft={10}>
        Movies list
      </Heading>
      <MoviesTable movies={movies} />
    </div>
  );
};

export default Movies;
