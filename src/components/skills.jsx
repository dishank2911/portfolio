import React,{ useState,useEffect, memo,useCallback,useMemo } from 'react';
import Resume from './resume'


const Skills = () => {

  // useEffect( async() => {
  //   try {
  //     console.log('try block');
  //     const res =  await fetch("http://localhost:1337/api/skills",{
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Accept: 'application/json',
  //         }
  //       }
  //       );
  //       const json = await res.json();
  //       console.log('data',json);
  //   } catch (error) {
  //     return new Error('Error occured');
      
  //   }
  // }, [])

  const [skills, setskills] = useState([]);
  const [clicked, setclicked] = useState(false);
  

  const loadSkills = useCallback(async (e) => {

  
    try {
      const res = await fetch(
        'http://localhost:1337/api/skills',
      );
      const json = await res.json();
      setskills(json);
    } catch (error) {
      console.log(error.message);
    }
    
  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  const value = useMemo(
    () => ({
      skills,
    }),
    [skills],
  );

  
  
  
  return (
    <>
    <main className="bg-gray-100" id="skills" >
    <section className=" container mx-auto py-20">
      <div className="flex flex-col justify-center items-center pb-10">

        <div className="py-4">
          <h5 className="text-2xl font-bold hero-gradient-heading mb-4">SKILLS</h5>
        </div>
        <div className=" pb-5">
          <h5 className="text-3xl font-bold">EDUCATION & SKILLS</h5>
        </div>

      </div>


      <div className="lg:flex gap-16 items-center flex-wrap pb-20 px-5">
        <div
          className="box-border min-h-[140px] min-w-[300px] py-10 px-7 bg-[#292727] rounded-3xl text-white flex flex-col flex-wrap justify-center">
          <p>2018-2022</p>
          <p className="font-semibold">Bachelor of Engineering</p>
          <h5 className="hero-gradient-heading font-bold text-xl">Government Engineering College, Modasa</h5>
        </div>

        <div className="flex-1 flex flex-col gap-4 md:pt-7 pt-7 lg:pt-2">

            { 
              
              value?.skills.data?.slice(0,3).map((y) =>  
                
                
            (
                  
                    <div key={y.id} ><div className="flex justify-between text-2xl font-semibold md:pt-7 pt-7 lg:pt-2">
                        <span>
                        <a href={y.attributes.skillUrl} target="_blank">
                            {y.attributes.skillName}
                        </a>
                        </span>
                        <span>
                            {y.attributes.skillPercentage}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 h-3">
                            <div className="bg-[#292727] h-3" style={{width: `${y.attributes.skillPercentage}`}}></div>
                        </div>
                        </div>))
                        
            }
        </div>
      </div>

      <div className=" flex justify-center ">
      <a href="\resume">
        <button
          className="btn btn__secondary" type='button' onClick={() => setclicked(!clicked)}>VIEW
          MORE
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6Z"/></svg>
          </span>
        </button>
        </a>
      </div>

    </section>
    
  </main>
  
  
  </>
  )
 
}

export default memo(Skills);
