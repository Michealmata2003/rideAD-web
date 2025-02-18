import React from 'react';
import { CustomInput } from '../input/input';
import { CustomButton } from '../button/Button';
import image from '../../assets/smile.png';
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";



const Chat = () => {
    return (
        <div>
            <div className="component">
                <div className='mdl:flex items-center justify-between'>
                    <div className='bg-Fade p-8 rounded-2xl w-full mdl:w-1/2'>
                        <div>
                            <h6 className='text-[#FFA500] text-[18px] font-semibold'>Get in touch with us</h6>
                            <h2 className='text-3xl font-bold w-full md:w-1/2 py-4'>Have Questions? Chat
                                With Us!</h2>
                            <p className='text-[18px] pb-6 border-b-2 border-[#EBEBEB]'>Have questions or feedback? we are here to help. Send
                                us a message, and we will respond with 24 hours</p>
                        </div>
                        <div className='py-4'>
                            <div className='flex gap-[1rem] w-full'>
                                <CustomInput type='text' label={'First Name'} />
                                <CustomInput type='text' label={'Last Name'} />
                            </div>
                            <CustomInput type='email' label={'Email Address'} />
                            <div className='flex flex-col gap-2 p-2'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Message</label>
                                <textarea className="outline-0 w-full rounded border-[#EBEBEB] border-2 p-[5px]" cols="30" rows="10"></textarea>

                            </div>
                            <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>Send a Message</CustomButton>

                        </div>
                    </div>

                    <div className='p-2 mdl:p-8  w-full mdl:w-1/2' >
                        <div className='w-full'>
                            <img src={image} alt="image" className='w-[100%]' />

                        </div>
                        <div className='bg-Fade p-8 rounded-3xl flex gap-4 items-center mt-4'>
                            <div className='text-[20px] bg-LightBlue rounded-full text-DeepBlue p-4' >
                                <IoMdMail />

                            </div>
                            <span>
                                <h1 className='font-semibold'>Email</h1>
                                <p>Ads@ridead.ng</p>
                            </span>
                        </div>
                        <div className='bg-Fade p-8 rounded-3xl flex gap-4 items-center mt-4'>
                            <div className='text-[20px] bg-[#FFF6E5] rounded-full text-[#FFA500] p-4' >
                                <PiPhoneCallFill />
                            </div>
                            <span>
                                <h1 className='font-semibold'>Phone</h1>
                                <p>+234(0)8103717124</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
