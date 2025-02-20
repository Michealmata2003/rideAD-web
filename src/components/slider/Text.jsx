import { CustomButton } from "../button/Button";
import play from '../../assets/play.svg';

export const FirstHeroText = () => {
    return (

        <div className="flex m-auto w-full h-full justify-center items-center text-center">
            <div className='w-full lg:w-3/5 px-4'>
                <h1 className=' text-2xl xs:text-5xl mdl:text-7xl font-semibold m-auto mdl:justify-items-start flex'>Drive Conversions with Every Mile</h1>
                <p className='text-[16px] sm:text-2xl m-auto mdl:justify-items-start flex py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className=" xs:flex gap-0 xs:gap-[20px] m-auto justify-center  py-2">
                    <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white my-2 mdl:my-0'} >
                        Get Started
                    </CustomButton>
                    <CustomButton className={'border rounded-full px-[30px] py-[10px] flex gap-[3px]'}>
                        Watch Video <img src={play} alt="" />
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}


export const SecondHeroText = () => {
    return (

        <div className=" flex w-full justify-items-start h-full m-auto items-center ">
            <div className='w-full mdl:w-3/5 mdl:justify-items-start px-2'>
                <h1 className=' text-2xl xs:text-5xl mdl:text-7xl font-semibold m-auto mdl:justify-items-start flex'>Drive Conversions with Every Mile</h1>
                <p className='text-[16px] sm:text-2xl m-auto mdl:justify-items-start flex py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className=" sm:flex gap-[20px] m-auto justify-items-start py-2">
                <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white my-2 mdl:my-0'} >
                        Get Started
                    </CustomButton>
                    <CustomButton className={'border rounded-full px-[30px] py-[10px] flex gap-[3px]'}>
                        Watch Video <img src={play} alt="" />
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}



export const ThirdHeroText = () => {
    return (

        <div className=" flex w-full justify-items-start h-full m-auto items-center ">
            <div className='w-full mdl:w-3/5 mdl:justify-items-start px-2'>
                <h1 className=' text-2xl xs:text-5xl lg:text-7xl font-semibold m-auto mdl:justify-items-start flex'>Drive Conversions with Every Mile</h1>
                <p className='text-[16px] sm:text-2xl m-auto mdl:justify-items-start flex py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className="  sm:flex gap-[20px] m-auto justify-items-start py-2">
                <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white my-2 mdl:my-0'} >
                        Get Started
                    </CustomButton>
                    <CustomButton className={'border rounded-full px-[30px] py-[10px] flex gap-[3px]'}>
                        Watch Video <img src={play} alt="" />
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

