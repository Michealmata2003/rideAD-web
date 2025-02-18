import React from 'react';
import { NewsLetter } from './NewsData';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div>
      <div className="component">
        <div className='py-[2rem] '>
          <h2 className='text-3xl font-semibold text-center py-[1.5rem]'>Latest News</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-4 sm:gap-8'>
            {
              NewsLetter.map((news, index) => (
                <div key={index}>
                  <img src={news.image} alt="" />
                  <div className='py-2'>
                    <h4 className='font-semibold text-xl'>{news.title}</h4>
                    <p className='text-[16px]'>{news.text}</p>
                  </div>
                  <Link to={'/'} className='text-DeepBlue font-semibold '> Continue Reading</Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
