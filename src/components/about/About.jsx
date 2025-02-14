import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/aboutimage.png';

const About = () => {
    return (
        <div className='component'>
            <div className='justify-center m-auto flex text-center py-8'>
                <h3 className='bg-LightBlue text-DeepBlue px-[20px] py-[10px] rounded-full font-semibold'>About Us</h3>
            </div>
            <div className='flex gap-[2rem] p-4'>
                <div className='w-1/2'>
                    <img src={image} alt="image" />

                </div>
                <div className='w-1/2'>
                    <h3 className='text-DeepBlue font-bold text-4xl pb-4'>Our Story</h3>
                    <p className='pb-4 font-normal text-[18px]'>At RideAD, we're revolutionizing advertising by transforming everyday journeys into high-impact brand experiences. Our innovative platform leverages the interiors of tricycles to expose brands to daily, organic audiences. With our advanced, campaign-specific QR code system, we enable seamless interactions between consumers and brands—making conversions easier and faster than ever before. <br />

                        RideAD empowers brands to track every detail of their campaigns. From real-time exposure metrics to detailed conversion analytics, our technology provides transparent insights and measurable ROI, whether you're running a single campaign or multiple initiatives.
                        We're dedicated to bridging the gap between physical engagement and digital marketing, turning every ride into an opportunity for growth and connection. Join us on our journey to redefine the advertising landscape—one ride at a time.
                    </p>
                    <Link to='/' className='text-DeepBlue font-semibold border-b-2 border-DeepBlue' >Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default About
