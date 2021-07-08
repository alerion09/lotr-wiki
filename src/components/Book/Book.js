import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ name, id }) => {
  return (
    <Link to={`/chapters/${id}`} className='link item'>
      {name}
    </Link>
  );
};

export default Book;
