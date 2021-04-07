import React from 'react';
import {Link} from 'react-router-dom';
const Book = ({name, id}) => {
    return (
        <Link to={`/chapters/${id}`}>
            <button className='item'>
                {name}
            </button>
        </Link>
        
    );
}

export default Book;
