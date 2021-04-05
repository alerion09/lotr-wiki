import React from 'react';
import {FaRing} from 'react-icons/fa'
const Book = ({name}) => {
    return (
        <li>
            <FaRing className='li-icon' />
           {name}
        </li>
    );
}

export default Book;
