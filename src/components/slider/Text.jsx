import { CustomButton } from "../button/Button";
import play from '../../assets/play.svg';

export const FirstHeroText = () => {
    return (

        <div className="flex m-auto w-full h-full justify-center items-center text-center">
            <div className='w-3/5 '>
                <h1 className='text-7xl font-semibold'>Drive Conversions with Every Mile</h1>
                <p className='text-xl w-3/4 m-auto  py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className="flex gap-[20px] m-auto justify-center py-2">
                    <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white'} >
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
            <div className='w-3/5 justify-items-start'>
                <h1 className='text-7xl font-semibold m-auto justify-items-start flex'>Drive Conversions with Every Mile</h1>
                <p className='text-2xl m-auto justify-items-start flex py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className="flex gap-[20px] m-auto justify-items-start py-2">
                    <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white'} >
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
            <div className='w-3/5 justify-items-start'>
                <h1 className='text-7xl font-semibold m-auto justify-items-start flex'>Drive Conversions with Every Mile</h1>
                <p className='text-2xl m-auto justify-items-start flex py-8'>Your brand deserves more than static advertising. With our mobility tech, everyday transit becomes a moving canvas for captivating, high-conversion campaigns.</p>
                <div className="flex gap-[20px] m-auto justify-items-start py-2">
                    <CustomButton className={'bg-DeepOrange px-[30px] py-[10px] rounded-full text-white'} >
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

