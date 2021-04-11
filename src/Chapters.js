import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loading from './Loading';

const Chapters = ({isLoading, setIsLoading, apiPrefix, getData, dataState}) => {

    const {id} = useParams(); //Get id from url.

    useEffect(() => {
        setIsLoading(true);
        getData(apiPrefix,`book/${id}/chapter`);
      },[]);
    
    if (isLoading) {
        return (
           <Loading />
        );
    }
    else {
        return (
            <div className='chapters-container'>
                <div className='chapters-container-header'>
                    <h2>Chapters</h2>
                    <h2>
                        {dataState.docs[0].bookName}
                    </h2>
                </div>
                <div className='chapters-container-chapters'>
                    <ul>
                        {dataState.docs.map((item) => {
                            return (
                                <li key={item._id}>
                                    {item.chapterName}
                                </li>
                            )
                        })}
                    </ul>
                </div> 
            </div>
        );
    };
};

export default Chapters;
