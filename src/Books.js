import React, {useEffect} from 'react';
import Book from './Book';
import Loading from './Loading';

const Books = ({isLoading, setIsLoading, apiPrefix, getData, dataState}) => {
    

    useEffect(() => {
        setIsLoading(true);
        getData(apiPrefix,'book');
      },[]);
    
    if (isLoading) {
        return (
           <Loading />
        );
    }
    else {
        return (
            <div className='items-container'>
                    {dataState.docs.map((item) => {
                        return (
                            <Book key={item._id} id={item._id} name={item.name}/>
                        )
                    })}
            </div>
        );
    }
    
}

export default Books;
