import React from 'react';
import brandA from '../../assets/brandA.svg';
import brandB from '../../assets/brandB.svg';
import brandC from '../../assets/brandC.svg';
import brandD from '../../assets/brandD.svg';
import brandE from '../../assets/brandE.svg';
import brandF from '../../assets/brandE.svg';

const Brands = () => {
  return (
   <div className='py-[5rem]'>
     <div className='w-full bg-Fade py-[2rem] '>
      <div className="max-w-[80rem] mx-auto px-2 lg:px-0 component">
        <h5 className='text-[32px] font-semibold text-center pb-8'>Trusted by <span className='text-DeepBlue'>thousands</span> of brands</h5>
        <div className='flex flex-wrap gap-[20px] m-auto justify-center'>
          <img src={brandA} alt="brands" />
          <img src={brandB} alt="brands" />
          <img src={brandC} alt="brands" />
          <img src={brandD} alt="brands" />
          <img src={brandE} alt="brands" />
          <img src={brandF} alt="brands" />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Brands
