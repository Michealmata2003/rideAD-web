import React from 'react'
import { CustomButton } from '../button/Button'

const NewsLetter = () => {
    return (
        <div className='py-6'>
            <div className="component">
                <div className='flex  items-center  p-8 border-b-2 border-[#EBEBEB]'>
                    <div className='w-1/2'>
                    <h3 className='text-3xl font-bold w-2/3'>join our new letter to keep up to date with us!</h3>

                    </div>
                <div className='flex items-center w-1/2 justify-center gap-[2rem]'>
                    <input  type='text' placeholder={'enter your email address'}  className='outline-0 w-2/3 rounded-full border-[#EBEBEB] border-2 p-[10px]'/>
                    <CustomButton className={'bg-DeepOrange px-[25px] py-[10px] rounded-full text-white'}>Subscribe</CustomButton>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
