import React from 'react';
import { clientData, usersData } from './worksData';
import user from '../../assets/user.png';
import { CustomButton } from '../button/Button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className='py-4'>
      <div className='component'>
        <div className='m-auto justify-center text-center w-full'>
          <h4 className='text-4xl font-bold py-2'>How it Works</h4>
          <h6 className='font-semibold text-[18px] py-6'>Get Started with this easy Steps</h6>
        </div>
        <div className='flex gap-[30px]'>
          <div className='bg-[#CBF0FF] rounded-xl p-[2rem] w-1/2 h-[100%]'>
            <h2 className='text-3xl font-bold py-2'>CLIENT</h2>
            {
              clientData.map((info, index) => (
                <div key={index}>

                  <div className='items-center pb-6'>
                    <li className='text-xl font-bold py-2 list-disc'>{info.title}</li>
                    <p className='list-none pl-[28px]'>{info.text}</p>
                  </div>
                </div>
              ))
            }

          </div>

          <div className='bg-[#FFEECF] rounded-xl p-[3rem] w-1/2'>
            <h2 className='text-3xl font-bold py-2'>USERS</h2>

            {
              usersData.map((info, index) => (
                <div key={index}>
                  <div className='items-center pb-6'>
                    <li className='text-xl font-bold py-2 list-disc'>{info.title}</li>
                    <p className='list-none pl-[28px]'>{info.text}</p>
                  </div>
                </div>
              ))
            }
            <img src={user} alt="image" />

          </div>
        </div>
        <Link to={'/'}>
          <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>Book A Call</CustomButton>
        </Link>
      </div>

    </div>
  )
}

export default HowItWorks
