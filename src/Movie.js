import React from 'react';
import {FaRing} from 'react-icons/fa';
const Movie = ({name}) => {
    return (
        <div className='item'>
            <div>
                <FaRing className='li-icon' />
                {name}
            </div>
            <button>See more..</button>
        </div>
    );
}

export default Movie;
