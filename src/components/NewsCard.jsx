import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt="author"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-semibold">{news.author.name}</p>
          <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
        <FaShareAlt className="ml-auto text-gray-600 cursor-pointer" />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-lg font-semibold">{news.title}</h3>
        <img
          src={news.thumbnail_url}
          alt="thumbnail"
          className="w-full h-80 bg-cover  my-4 rounded-md"
        />
        <p className="text-sm text-gray-700 mb-2">{news.details.slice(0, 150)}...</p>
        <a href="#" className="text-orange-500 font-semibold">Read More</a>
      </div>
      <div className="px-4 py-2 flex items-center border-t border-gray-200">
        <div className="flex items-center text-orange-400 mr-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.round(news.rating.number) ? 'text-orange-500' : 'text-gray-300'} />
          ))}
          <span className="ml-2 text-sm font-semibold">{news.rating.number}</span>
        </div>
        <FaEye className="text-gray-500 mr-2" />
        <span className="text-sm text-gray-600">{news.total_view}</span>
      </div>
    </div>
  );
};

export default NewsCard;
