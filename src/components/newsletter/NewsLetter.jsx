import React from 'react'
import { CustomButton } from '../button/Button'

const NewsLetter = () => {
    return (
        <div className='py-6'>
            <div className="max-w-[80rem] mx-auto component">
                <div className='lg:flex  items-center  p-8 border-b-2 border-[#EBEBEB]'>
                    <div className='w-full lg:w-1/2'>
                    <h3 className='text-[32px] font-normal w-full mdl:w-2/3'>join our new letter to keep up to date with us!</h3>
                    </div>
                    <div className='md:flex items-center w-full py-4 lg:py-0 lg:w-1/2 justify-center gap-[2rem]'>
                        <input type='text' placeholder={'enter your email address'} className='text-[16px] outline-0 w-full md:w-2/3 rounded-full border-[#EBEBEB] border-2 p-[10px] my-2 md:my-0' />
                        <CustomButton className={'bg-DeepOrange px-[25px] py-[10px] rounded-full text-white'}>Subscribe</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
