import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/realLogo.svg';

const Footer = () => {
    return (
        <div>
            <div className="component">
                <div className='mdl:flex gap-[1.5rem] items-center p-8 border-b-2 border-[#EBEBEB]'>
                    <div className='mdl:w-1/2 '>
                        <img src={logo} alt="" />

                        <h6 className='font-normal text-[18px] pt-4'>A mobility techAD startup that leverages conventional modes of transportation
                            to accentuate brands’ exposure and drive high conversion rates on advertising spend.</h6>

                    </div>
                    <div className='grid  mdl:grid-cols-3 w-4/5'>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Company</h4>
                            <ul>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>About Us</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Team</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Careers</Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Legal</h4>
                            <ul>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Terms and Conditions</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Refund and cancellation</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Privacy and Policy</Link>
                                </li>
                                <li className='font-normal text-[18px] pb-2'>
                                    <Link to={'/'}>Cookie Policy</Link>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4 className='font-semibold text-xl pb-2'>Contact</h4>
                            <ul>
                                <li className='font-normal text-[18px] pb-2'>+234 (0) 8103717124</li>
                                <li className='font-normal text-[18px] pb-2'>Ads@ridead.ng</li>
                                <li className='font-normal text-[18px] pb-2'>Plot 148, Apata Avenue
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
