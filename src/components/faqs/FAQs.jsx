import React from 'react'


export const clientData = [
   {
      id: 1,
      question: 'What is RideAD?',
      answer: 'RideAD transforms the interiors of tricycles into mobile advertising spaces, connecting brands with daily, organic audiences through advanced QR code technology.',
   },
   {
      id: 2,
      question: 'How does the QR code system work?',
      answer: 'Each campaign is assigned a unique QR code. When users scan the code, they seamlessly access the campaign’s digital content, making interaction and conversion fast and easy.',
   },
   {
      id: 3,
      question: 'How can brands track campaign performance?',
      answer: 'Our platform provides real-time analytics, allowing you to monitor exposures, track conversions, and measure ROI for each campaign or across multiple campaigns.',
   },
   {
      id: 4,
      question: 'What types of campaigns can I run with RideAD?',
      answer: 'You can run a variety of campaigns—from brand awareness to targeted promotions—tailored to your specific objectives, whether you’re launching a single campaign or multiple initiatives.',
   },
   {
      id: 5,
      question: 'Who are the primary audiences for RideAD campaigns?',
      answer: 'Our campaigns reach everyday commuters who use tricycles, providing brands with access to a diverse, engaged, and organic audience in high-traffic urban areas.',
   },


];



const FAQs = () => {
   return (
      <div className='bg-Fade py-4 mt-5'>
         <div className="max-w-[80rem] mx-auto pt-10 px-2 lg:px-0 space-y-10  component">
            <div className='m-auto text-center justify-center w-full lg:w-1/2'>
               <h2 className='text-[40px] font-semibold w-full m-auto text-center py-4'>Frequently Asked
                  Questions</h2>
               <p className='text-[20px] font-normal py-4 m-auto text-center'>The following are some of the most frequently asked questions we've received, along with our answers.</p>
            </div>
            <div className='grid mdl:grid-cols-2 gap-[20px] py-4'>
               {
                  clientData.map((data, index) => (
                     <div key={index} >
                        <h4 className='py-2 text-xl font-semibold'>{data.question}</h4>
                        <p className='bg-[#F5F7FF] p-[1rem] text-[18px] border-b-2 border-DeepBlue'>{data.answer}</p>
                     </div>
                  ))
               }
            </div>
         </div>

      </div>
   )
}

export default FAQs



