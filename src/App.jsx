// import React from 'react';
// import '../src/App.css';
// import BannerMain from './components/banner_main';
// import Header from './components/header';
// import About from './components/about';
// import Services from './components/services';
// import Projects from './components/projects';
// import Skills from './components/skills';
// import Form from './components/form';
// import Footer from './components/footer';


// const App = () => {
//   return (
//     <>
//     <main id='home'>
//       <Header />
//     <BannerMain />
//     </main>
//     <About />
//     <Services />
//     <Projects />
//     <Skills />
//     <Form />
//     <Footer />
//     </>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import '../src/App.css';
import BannerMain from './components/banner_main';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Skills from './components/skills';
import Form from './components/form';
import Footer from './components/footer';
import Loading from './components/loading';
import Resume from './components/resume'


const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

    <Loading />

    return () =>  {
      <Loading />
    }
  }, []);

  if(isLoaded === false){
        return <Loading />
    }

  return (
    <>
  
      {
        <div>
          <main id='home'>
            <Header />
            <BannerMain />
          </main>
          <About />
          <Services />
          <Projects />
          <Skills />
          <Form />
          {/* <Resume /> */}
          <Footer />
        </div>
      }
    </>
  )
}


export default App