import React from 'react'
import { Link } from 'react-router-dom';
import read1 from '../../../assets/read1.png';
import read2 from '../../../assets/read2.png';
import read3 from '../../../assets/read3.png';

const Read = () => {
  return (
    <div>
      <div className="component">
        <div className='grid grid-cols-1  mdl:grid-cols-3  justify-center center '>
          <div className='w-full mdl:w-3/4 m-auto justify-center'>
            <img className='w-full' src={read1} alt="" />
            <div>
              <h3>The Future of Mobile Advertising</h3>
              <p>Explore how mobility tech is reshaping ad strategies and connecting brands with audiences on the move.</p>
              <Link to={'/'} className='text-DeepBlue font-semibold '> Continue Reading</Link>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${read2})` }} className={'   bg-center text-white rounded-xl p-4 my-4 mdl:my-0 place-items-end grid'}>
            <div >
              <h3>Turning Every Ride into a Digital Billboard</h3>
              <p>Discover how everyday transportation is being transformed into dynamic marketing platforms. By turning the interiors of tricycles into interactive advertising spaces, brands can reach captive urban audiences on the move. This post explores the innovative strategies behind mobile advertising and how they drive engagement, boost conversion rates, and redefine brand exposure in our fast-paced world.</p>
              <Link to={'/'} className='text-DeepBlue font-semibold '> Continue Reading</Link>
            </div>
          </div>


          <div className='w-full mdl:w-3/4 m-auto justify-center'>
            <img className='w-full' src={read3} alt="" />
            <div>
              <h3>The Future of Mobile Advertising</h3>
              <p>Explore how mobility tech is reshaping ad strategies and connecting brands with audiences on the move.</p>
              <Link to={'/'} className='text-DeepBlue font-semibold '> Continue Reading</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read
