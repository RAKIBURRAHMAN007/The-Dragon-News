import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
 
    return (
        <div>
            <h2 className='font-semibold mb-4'>Dragon News Home</h2>
            <div className='space-y-3'>
                {
                    news.map(singleNews => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)

                }
            </div>
        </div>
    );
};

export default CategoryNews;