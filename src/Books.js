import React, {useEffect} from 'react';
import Book from './Book';
import Loading from './Loading';

const Books = ({isLoading, apiPrefix, getData, dataState}) => {
    

    useEffect(() => {
        getData(apiPrefix,'book');
      },[]);
    
    if (isLoading) {
        return (
           <Loading />
        );
    }
    else {
        return (
            <div className='books-container'>
                <ul>
                    {dataState.docs.map((item) => {
                        return (
                            <Book key={item._id} name={item.name}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
    
}

export default Books;
