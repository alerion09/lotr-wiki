import React, { useEffect } from 'react';
import Loading from '../Loading/Loading';
import Movie from '../Movie/Movie';

const Movies = ({ isLoading, setIsLoading, apiPrefix, getData, dataState }) => {

  useEffect(() => {
    setIsLoading(true);
    getData(apiPrefix, 'movie');
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  } else {
    return (
      <div className='items-container'>
        {dataState && dataState?.docs && dataState?.docs.map((item) => {
          return (
            <Movie key={item._id} name={item.name} id={item.id}/>
          );
        })}
        {console.log(dataState)}
      </div>
    );
  }
};

export default Movies;
