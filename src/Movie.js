import React from 'react';
const Movie = ({name}) => {
    return (
        <button className='item'>
            <div>
                {name}
            </div>
        </button>
    );
}

export default Movie;
