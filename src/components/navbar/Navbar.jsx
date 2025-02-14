import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../button/Button';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div >
            <div className='flex justify-between w-full bg-transparent items-center py-2'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul className='flex gap-[2rem] items-center text-white'>
                        <li>
                            <Link to='/'>About Us</Link>

                        </li>
                        <li>
                            <Link to='/'>How it works</Link>

                        </li>
                        <li>
                            <Link to='/'>FAQs </Link>

                        </li>
                        <li>
                            <Link to='/'>Contact Us</Link>

                        </li>
                        <li>
                            <Link to='/'>Blogs</Link>

                        </li>
                    </ul>
                </nav>
                <div>
                    <Link to='/'>
                        <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>Book A Call</CustomButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
