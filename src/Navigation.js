import React from 'react';
import {Link} from 'react-router-dom';
const Navigation = () => {
    return (
            <nav> 
                <ul>
                    <li><Link className='link' to='/'><h1>The Lord of The Rings Wiki</h1></Link></li>
                </ul>
                <ul>
                    <li><Link className='link' to='/books'>Books</Link></li>
                    <li><Link className='link' to='/movies'>Movies</Link></li>
                    <li><Link className='link' to='/characters'>Characters</Link></li>
                </ul>
            </nav>
    );
};

export default Navigation;
