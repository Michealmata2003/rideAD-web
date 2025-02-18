import React from 'react';
import { clientData, usersData } from './worksData';
import user from '../../assets/user.png';
import { CustomButton } from '../button/Button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className='py-4'>
      <div className='max-w-[80rem] px-2 lg:px-0 mx-auto component space-y-5'>
        <div className='m-auto justify-center text-center w-full space-y-4'>
          <h4 className='text-[40px] font-semibold '>How it Works</h4>
          <h6 className='font-normal text-[20px]'>Get Started with this easy Steps</h6>
        </div>
        <div className='mdl:flex gap-[30px] align-middle '>
          <div className='bg-[#CBF0FF] rounded-xl p-[2rem] mdl:w-1/2 h-[100%]'>
            <h2 className='text-[40px] font-semibold py-2'>CLIENT</h2>
            {
              clientData.map((info, index) => (
                <div key={index} className=' '>

                  <div className='items-center  pb-5'>
                    <div>
                      <li className='text-[18px] font-normal list-disc'>{info.title}</li>
                      <p className='list-none font-[200] pl-[28px]'>{info.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

          <div className='bg-[#FFEECF] rounded-xl p-[2rem] mdl:w-1/2'>
            <h2 className='text-[40px] font-semibold py-2'>USERS</h2>

            {
              usersData.map((info, index) => (
                <div key={index} className=' '>

                  <div className='items-center  pb-5'>
                    <div>
                      <li className='text-[18px] font-normal list-disc'>{info.title}</li>
                      <p className='list-none font-[200] pl-[28px]'>{info.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }
            <img src={user} alt="image" />

          </div>
        </div>
        <Link to={'/'}>
          <CustomButton className={'bg-DeepOrange px-[40px] py-[15px] mt-10 mdl:mt-0 rounded-full text-white'}>Book A Call</CustomButton>
        </Link>
      </div>

    </div>
  )
}

export default HowItWorks
