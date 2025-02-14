import React from 'react';
import { CustomInput } from '../input/input';
import { CustomButton } from '../button/Button';
import image from '../../assets/smile.png';

const Chat = () => {
    return (
        <div>
            <div className="component">
                <div>
                    <div className='bg-Fade p-8 rounded-md'>
                        <div>
                            <h6>Get in touch with us</h6>
                            <h2>Have Questions? Chat
                                With Us!</h2>
                            <p>Have questions or feedback? we are here to help. Send
                                us a message, and we will respond with 24 hours</p>
                        </div>
                        <div>
                            <div className='flex gap-[1rem] w-full'>
                                <CustomInput type='text' label={'First Name'} />
                                <CustomInput type='text' label={'Last Name'} />
                            </div>
                            <CustomInput type='email' label={'Email Address'} />
                            <div className='flex flex-col gap-2 pt-2'>
                                <label htmlFor="" className='text-[16px] font-semibold'>Message</label>
                                <textarea className="outline-0 w-full rounded border-[#EBEBEB] border-2 p-[5px]" cols="30" rows="10"></textarea>

                            </div>
                            <CustomButton className={'bg-DeepOrange px-[30px] py-[15px] rounded-full text-white'}>Send a Message</CustomButton>

                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
