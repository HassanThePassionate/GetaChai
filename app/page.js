import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className='pb-[10px]'>
      <div className='flex items-center justify-center flex-col gap-4 pt-[5%] pb-[50px]'>
        <div className='text-white text-5xl font-bold flex items-center '>
          Buy Me a Chai!
          <span>
            <Image src='/black-tea.gif' alt='img' width={60} height={60} />
          </span>
        </div>
        <p className='font-bold tex-center text-white'>
          A Crowd Funding PlateForm For Creators. Get Funded By Your Fans and
          Followers. Start Now
        </p>
        <div>
          <button
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Start Here
          </button>
          <button
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Read More
          </button>
        </div>
      </div>
      <div className='line bg-white h-1 w-full mt-[4%] opacity-10'></div>
      <div className='text-white container mx-auto py-10'>
        <h2 className='text-center font-bold text-3xl mb-12'>
          You Fans Can Buy You a Chai!
        </h2>

        <div className='flex iteam-center gap-5 justify-around'>
          <div className='iteam space-y-3 flex items-center justify-center flex-col  '>
            <div className='bg-slate-400 h-[80px] w-[80px] flex items-center justify-center rounded-full '>
              <img src='/man.gif' alt='img' height={68} width={68} />
            </div>
            <p className='font-bold'>Fans Want to Help</p>
            <p>Your Fans are available for you to help you</p>
          </div>
          <div className='iteam space-y-3 flex items-center justify-center flex-col  '>
            <div className='bg-slate-400 h-[80px] w-[80px] flex items-center justify-center rounded-full '>
              <Image src='/coin.gif' alt='img' height={68} width={68} />
            </div>
            <p className='font-bold'>Fans Want to Help</p>
            <p>Your Fans are available for you to help you</p>
          </div>
          <div className='iteam space-y-3 flex items-center justify-center flex-col   '>
            <div className='bg-slate-400 h-[80px] w-[80px] flex items-center justify-center rounded-full '>
              <img src='/group.gif' alt='img' height={68} width={68} />
            </div>
            <p className='font-bold'>Fans Want to Help</p>
            <p>Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className='line bg-white h-1 w-full mt-[4%] opacity-10'></div>
      <div className='text-white container mx-auto py-10 flex items-center justify-center flex-col'>
        <h2 className='text-center font-bold text-3xl mb-12'>Learn More</h2>

        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/eBnNuC73QS8?si=jga-9ov_3qGDKdhc'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
