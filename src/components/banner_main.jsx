import React,{ memo } from 'react';

const BannerMain = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen px-10 text-center py-10 text-white pt-28">
      
        <p className="font-semibold text-2xl pb-6">Hello, my name is</p>
        <h2 className="hero-gradient-heading font-extrabold text-7xl pb-10">Dishank Patel</h2>
        <p className='font-semibold text-1xl'>I'm a Full Stack Developer based in India. I want to make things that make a difference.</p>
      <a className="pt-10" href='../public/Profile (1).pdf' download="Dishank's Resume" target='_blank'>
        <button
          className="btn btn__primary" type='button'>
          HIRE
          ME
          TODAY
          <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg></span>
        </button>
      </a>
    </div>
    )
}

export default memo(BannerMain);