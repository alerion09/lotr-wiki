import React from 'react';
import {FaRing} from 'react-icons/fa'
const Book = ({name}) => {
    return (
        <div className='item'>
            <FaRing className='li-icon' />
           {name}
        </div>
    );
}

export default Book;
