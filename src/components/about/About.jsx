import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/aboutimage.png';

const About = () => {
    return (
        <div className='max-w-[80rem] mx-auto pt-[10rem] component'>
            <div className='justify-center m-auto flex text-center py-8 '>
                <h3 className='bg-LightBlue text-[#0587D0] px-[20px] py-[10px] rounded-full font-semibold'>About Us</h3>
            </div>
            <div className='lg:flex space-y-10 lg:space-y-0 gap-[2rem] p-4'>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full  ml-auto' src={image} alt="image" />
                </div>
                <div className='lg:w-1/2 space-y-4'>
                    <h3 className='text-[#0587D0] font-bold text-4xl pb-4'>Our Story</h3>
                    <p className='pb-4 font-normal text-[18px]'>At RideAD, we're revolutionizing advertising by transforming everyday journeys into high-impact brand experiences. Our innovative platform leverages the interiors of tricycles to expose brands to daily, organic audiences. With our advanced, campaign-specific QR code system, we enable seamless interactions between consumers and brands—making conversions easier and faster than ever before. <br />

                        RideAD empowers brands to track every detail of their campaigns. From real-time exposure metrics to detailed conversion analytics, our technology provides transparent insights and measurable ROI, whether you're running a single campaign or multiple initiatives.
                        We're dedicated to bridging the gap between physical engagement and digital marketing, turning every ride into an opportunity for growth and connection. Join us on our journey to redefine the advertising landscape—one ride at a time.
                    </p>
                    <Link to='/' className='text-[#0587D0] text-[24px] font-semibold border-b-2 border-[#0587D0]' >Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default About
