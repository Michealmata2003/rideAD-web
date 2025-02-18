import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from '../button/Button';
import logoHome from '../../assets/logo.svg';
import logoHomeSmall from '../../assets/realLogo.svg';
import logoBlog from '../../assets/realLogo.svg';
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);

    const isHome = location.pathname === '/';
    const isBlog = location.pathname === '/blog';

    // Listen for screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full  mx-auto relative z-[9999]">
            <div className={`flex justify-between w-full items-center py-2 px-6 relative ${isHome ? (isMobile ? 'bg-white' : 'bg-transparent') : 'bg-white'}`}>
                {/* Logo */}
                <div>
                    <img
                        src={isHome ? (isMobile ? logoHomeSmall : logoHome) : logoBlog}
                        alt="Logo"
                        className="h-10 transition-all duration-300"
                    />
                </div>

                {/* Desktop Navbar */}
                <div className='hidden mdl:flex items-center gap-6'>
                    <nav>
                        <ul className={`flex gap-4 lg:gap-8 items-center transition-all duration-300 ${isHome ? (isMobile ? 'text-black' : 'text-white') : 'text-black'}`}>
                            <li><Link to='/' >About Us</Link></li>
                            <li><Link to='/'>How it works</Link></li>
                            <li><Link to='/' >FAQs</Link></li>
                            <li><Link to='/' >Contact Us</Link></li>
                            <li><Link to='/blog' className={`${location.pathname === '/blog' ? 'text-DeepBlue' : 'text-white'}`}>Blogs</Link></li>
                        </ul>
                    </nav>
                    {/* Call to Action Button */}
                    <div>
                        <Link to='/'>
                            <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>
                                Book A Call
                            </CustomButton>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className='mdl:hidden z-[9999]'>
                    {menuOpen ? (
                        <MdClose className='text-[30px] cursor-pointer text-black' onClick={() => setMenuOpen(false)} />
                    ) : (
                        <MdOutlineMenu className='text-[30px] cursor-pointer text-black' onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mdl:hidden flex flex-col items-center bg-white shadow-md py-4 absolute w-full left-0 top-[100%] z-[9999] transition-all duration-300 ${menuOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible overflow-hidden'}`}>
                <nav>
                    <ul className='flex flex-col gap-4 text-black items-center'>
                        <li><Link to='/' onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to='/' onClick={() => setMenuOpen(false)}>How it works</Link></li>
                        <li><Link to='/' onClick={() => setMenuOpen(false)}>FAQs</Link></li>
                        <li><Link to='/' onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                        <li><Link to='/blog' className={`${location.pathname === '/blog' ? 'text-DeepBlue' : 'text-black'}`} onClick={() => setMenuOpen(false)}>Blogs</Link></li>
                    </ul>
                </nav>
                <div className='mt-4'>
                    <Link to='/'>
                        <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>
                            Book A Call
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
