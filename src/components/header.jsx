import React,{ useState,useEffect, memo } from 'react';
import '../styles/header.css';

const Header = () => {

  const [clicked, setclicked] = useState(false);
  const [navColor, setnavColor] = useState("#292727");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#000000") : setnavColor("#292727");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  

  return (
    
    <div>
    <header className="w-full header fixed" style={{
          backgroundColor: navColor,
          transition: "all 1s"
        }}>
        <div className='container mx-auto'>
          <a href="#home">
            <h1><span className="hero-gradient-heading">#</span>Dishank Patel<span
                className="hero-gradient-heading">.</span></h1>
          </a>
          <nav>
            <ul>
              <li className='group'>
                <a href="#home">Home</a><span className='group-hover:max-w-full'></span>
              </li>
              <li className='group'>
                <a href="#about">About</a><span className='group-hover:max-w-full'></span>
              </li>
              <li className='group'>
                <a href="#services">Services</a><span className='group-hover:max-w-full'></span>
              </li>
              <li className='group'>
                <a href="#projects">Projects</a><span className='group-hover:max-w-full'></span>
              </li>
              <li className='group'>
                <a href="#skills">Skills</a><span className='group-hover:max-w-full'></span>
              </li>
              <li className='group'>
                <a href="#contact">Contact</a><span className='group-hover:max-w-full'></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <header className="text-white lg:hidden md:block h-24 px-10 fixed w-full" style={{
          backgroundColor: navColor,
          transition: "all 1s"
        }}>
    <div className='flex justify-between items-center pt-5'>

        <div>
          <div>
            <a href="#home">
              <h1 className='font-semibold text-4xl'><span className="hero-gradient-heading">#</span>Dishank<span
                  className="hero-gradient-heading">.</span></h1>
            </a>
          </div>
          
        </div>
        <div>
        <nav>
            <div className="flex flex-col items-center text-6xl font-bold" role='button' onClick={() => setclicked(!clicked)}>
              <span>=</span>
            </div>
          </nav>
          </div>
    </div>
      </header>
      {
                clicked &&  <nav className='flex justify-center pt-24'>
                <ul className='flex flex-col gap-8 justify-center items-center bg-[#292727] w-screen h-1/2 container text-white font-bold py-10'>
                  <li className='group'>
                    <a href="#home">Home</a><span className='group-hover:max-w-full'></span>
                  </li>
                  <li className='group'>
                    <a href="#about">About</a><span className='group-hover:max-w-full'></span>
                  </li>
                  <li className='group'>
                    <a href="#services">Services</a><span className='group-hover:max-w-full'></span>
                  </li>
                  <li className='group'>
                    <a href="#projects">Projects</a><span className='group-hover:max-w-full'></span>
                  </li>
                  <li className='group'>
                    <a href="#skills">Skills</a><span className='group-hover:max-w-full'></span>
                  </li>
                  <li className='group'>
                    <a href="#contact">Contact</a><span className='group-hover:max-w-full'></span>
                  </li>
                </ul>
              </nav>
              }
      </div>
      
  )
}

export default memo(Header);