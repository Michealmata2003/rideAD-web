import React from "react";
import { CustomInput } from "../input/input";
import { CustomButton } from "../button/Button";
import image from "../../assets/smile.png";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

const Chat = () => {
  return (
    <div>
      <div className="max-w-[80rem] mx-auto component">
        <div className="mdl:flex items-center justify-between">
          <div className="bg-Fade p-8 rounded-2xl w-full mdl:w-1/2">
            <div>
              <h6 className="text-[#FF8031] text-[20px] font-normal">
                Get in touch with us
              </h6>
              <h2 className="text-[40px] font-normal w-full md:w-3/4 py-4">
                Have Questions? Chat With Us!
              </h2>
              <p className="text-[18px] font-normal pb-6 border-b-2 border-[#EBEBEB]">
                Have questions or feedback? we are here to help. Send us a
                message, and we will respond with 24 hours
              </p>
            </div>
            <div className="py-4">
              <div className="flex gap-[1rem] w-full">
                <CustomInput type="text" label={"First Name"} />
                <CustomInput type="text" label={"Last Name"} />
              </div>
              <CustomInput type="email" label={"Email Address"} />
              <div className="flex flex-col gap-2 p-2">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Message
                </label>
                <textarea
                  className="outline-0 w-full rounded border-[#EBEBEB] border-2 p-[5px]"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <CustomButton
                className={
                  "w-full bg-[#FF8031] text-[18px] font-semibold  py-[18px] rounded-full text-white opacity-50"
                }
              >
                Send a Message
              </CustomButton>
            </div>
          </div>

          <div className="p-2 mdl:p-8  w-full mdl:w-1/2">
            <div className="w-full">
              <img src={image} alt="image" className="w-[100%]" />
            </div>
            <div className="bg-Fade p-8 rounded-3xl flex gap-4 items-center mt-4">
              <div className="text-[20px] bg-LightBlue rounded-full text-DeepBlue p-4">
                <IoMdMail />
              </div>
              <span>
                <span>
                  <h1 className="font-semibold text-[20px]">Email</h1>
                  <p className="font-normal text-[18px] ">Ads@ridead.ng</p>
                </span>
              </span>
            </div>
            <div className="bg-Fade p-8 rounded-3xl flex gap-4 items-center mt-4">
              <div className="text-[20px] bg-[#FFF6E5] rounded-full text-[#FFA500] p-4">
                <PiPhoneCallFill />
              </div>
              <span>
              <h1 className='font-semibold text-[20px]'>Phone</h1>
              <p className='font-normal text-[18px] '>+234(0)8103717124</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
