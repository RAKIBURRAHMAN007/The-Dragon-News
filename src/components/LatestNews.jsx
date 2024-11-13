import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 p-2'>
            <p className='bg-[#D72050] text-blue-100 px-3 py-1'>Latest</p>

            <Marquee pauseOnHover={true} speed={70} className='space-x-10 '>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat mollitia. Dignissimos quae et 
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat mollitia. Dignissimos quae et 
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quaerat mollitia. Dignissimos quae et 
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;