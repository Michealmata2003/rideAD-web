import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/realLogo.svg';

const Footer = () => {
    return (
        <div>
            <div className="max-w-[80rem] mx-auto px-2 lg:px-0 component">
                <div className='mdl:flex gap-[1.5rem] space-y-10 mdl:space-y-0 items-start py-8 border-b-2 border-[#EBEBEB]'>
                    <div className='mdl:w-1/2  '>
                        <img src={logo} alt="" />

                        <h6 className='font-[300] text-[18px] pt-4'>A mobility techAD startup that leverages conventional modes of transportation
                            to accentuate brands’ exposure and drive high conversion rates on advertising spend.</h6>

                    </div>
                    <div className='grid  md:grid-cols-3 mdl:w-4/5'>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Company</h4>
                            <ul className=' space-y-5'>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>About Us</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Team</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Careers</Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Legal</h4>
                            <ul className=' space-y-5'>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Terms and Conditions</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Refund and cancellation</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Privacy and Policy</Link>
                                </li>
                                <li className='font-[300] text-[18px] pb-2'>
                                    <Link to={'/'}>Cookie Policy</Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Contact</h4>
                            <ul className=' space-y-5'>
                                <li className='font-[300] text-[18px] pb-2'>+234 (0) 8103717124</li>
                                <li className='font-[300] text-[18px] pb-2'>Ads@ridead.ng</li>
                                <li className='font-[300] text-[18px] pb-2'>Plot 148, Apata Avenue
                                    Opp. Apple HQ, Okitipupa
                                    Ondo State </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
