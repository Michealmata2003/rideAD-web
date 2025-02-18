import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Policy = () => {
    return (
        <div className='p-8 border-b-4 border-DeepBlue'>
            <div className="component">
                <div className='md:flex justify-between'>
                    <h6 className='text-[#667085] font-semibold'>©2025 RideAD. All rights reserved.</h6>
                    <div className='xs:flex gap-4'>
                        <div className='text-[20px] bg-Fade rounded-full text-[#333333] p-2'>
                            <FaInstagram />
                        </div>
                        <div className='text-[20px] bg-Fade rounded-full text-[#333333] p-2'>
                            <FaFacebook />
                        </div>
                        <div className='text-[20px] bg-Fade rounded-full text-[#333333] p-2'>
                            <FaTwitter />
                        </div>
                        <div className='text-[20px] bg-Fade rounded-full text-[#333333] p-2'>
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policy
