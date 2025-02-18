import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import image from '../../../assets/blogAbout.png';

const BlogHero = () => {
    return (
        <div >
            <div className="component">
                <Navbar />
                <div className='py-[4rem] bg-Fade w-full justify-center rounded-md m-auto text-center'>
                    <p className='text-[18px] py-4 tracking-[.5rem] '>Insights & Stories</p>

                    <h1 className='font-bold text-3xl w-full mdl:w-2/5 m-auto flex'>Explore the latest trends in mobility tech and advertising.</h1>

                </div>

                <div>
                    <div className='mdl:flex gap-0 mdl:gap-[1rem] p-4'>
                        <div className='w-full mdl:w-1/2'>
                            <img src={image} alt="image" />

                        </div>
                        <div className='mdl:w-1/2 w-full h-full items-center m-auto'>
                            <h3 className='text-black font-bold w-full mdl:py-0 py-4 mdl:w-[90%] text-4xl pb-4'>Revolutionizing Advertising with Mobility Tech</h3>
                            <p className='pb-4 font-normal text-[17px]'>
                                In today's fast-paced world, traditional advertising is taking a backseat to innovative, mobile strategies. With platforms like RideAD, everyday transit transforms into dynamic advertising spaces, where tricycles become moving canvases for brands. By integrating QR codes, these campaigns offer interactive, personalized experiences that drive engagement and boost conversion rates. Discover how mobility tech is reshaping the advertising landscape and turning daily commutes into high-impact brand interactions.
                            </p>
                            <Link to='/' className='text-DeepBlue font-semibold border-b-2 border-DeepBlue' >Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHero
