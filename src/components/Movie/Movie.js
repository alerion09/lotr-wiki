import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ name, id }) => {
  return (
    <Link to={`/movies/${id}`} className='link item'>
      {name}
    </Link>
  );
};

export default Movie;
