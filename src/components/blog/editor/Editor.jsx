import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/editor.png';
import { NewsLetter } from '../news/NewsData';


const Editor = () => {
    return (
        <div className='py-8'>
            <div className="component">
                <div style={{ backgroundImage: `url(${image})` }} className={' h-[80vh] bg-cover bg-center text-white rounded-xl p-8 place-items-end grid'}>
                    <div className=''>
                        <h2 className='text-xl font-semibold'>Navigating Urban Landscapes: The Future of Contextual Advertising</h2>
                        <p>Urban life is the perfect backdrop for targeted advertising. Discover how brands are leveraging everyday transit and mobility tech to reach audiences right in the heart of the city. With real-time data and interactive campaigns, your brand can connect with consumers where they live, work, and play.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-4 gap-[1rem] py-8'>
                    {
                        NewsLetter.map((news, index) => (
                            <div key={index} className='m-auto justify-center w-full p-2'>
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
    )
}

export default Editor
