import React from 'react';
const Book = ({name}) => {
    return (
        <button className='item'>
           {name}
        </button>
    );
}

export default Book;
