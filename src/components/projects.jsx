import React, {useState, useCallback,useEffect,useMemo, memo} from 'react'

const Projects = () => {

  const [clicked, setclicked] = useState(false)
  const [projects, setprojects] = useState([]);
  

  const loadprojects = useCallback(async () => {

  
    try {
      const res = await fetch(
        'http://localhost:1337/api/projects',
      );
      const json = await res.json();
      setprojects(json);
      
    } catch (error) {
      console.log(error.message);
    }
    
  }, []);

  useEffect(() => {
    loadprojects();
  }, [loadprojects]);

  const value = useMemo(
    () => ({
      projects,
    }),
    [projects],
  );

  
  
  return (
    <section className="container mx-auto flex flex-col py-20 justify-center items-center" id="projects">
    <div className="pb-4">
      <h5 className="text-2xl font-bold hero-gradient-heading pb-4">PORTFOLIO</h5>
    </div>
    <div className=" pb-10">
      <h5 className="text-3xl font-bold">WORK I'VE DONE</h5>
    </div>
    <div className="pb-20 flex flex-wrap">
      <div className="flex gap-10 flex-wrap justify-center px-5">
      {
        
        value?.projects.data?.map((x) => (
          <div key={x.id}> 
          <div className="bg-[#292727] p-4 shadow-base rounded-2xl overflow-hidden">
              
                <div className="lg:w-[500px] w-[340px] aspect-square md:w-[400px] rounded-2xl pb-2">
                <img srcSet={x.attributes.imgUrl} alt="My Portfolio"/>
              
              </div>
          
                <div className="flex justify-between items-center hover:opacity-[0.7]" role='button' onClick={() => setclicked(!clicked)}>
                  <h5 className="text-3xl hero-gradient-heading font-semibold mb-3 line-clamp-1">{x.attributes.projectName}</h5>
                  <button className="flex items-center gap-2 font-bold text-sm text-white text-center">VIEW
                    {/* <span className="material-symbols-outlined hero-gradient-heading">
                      arrow_right_alt
                    </span> */}
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
                    </span>
                  </button>
                </div>
                
                
            
            </div>
            </div>
        ))
            
            }

{
                  clicked && <div className="bg-[#292727] p-8 mx-3 shadow-base rounded-2xl overflow-hidden text-white w-full"> 
                    <div className='flex flex-col'>
                      <h5 className='font-bold text-xl hero-gradient-heading'>Title</h5>
                      <p>MY PERSONAL PORTFOLIO</p>
                      <h5 className='font-bold text-xl hero-gradient-heading'>Role</h5>
                      <p>FULL-STACK DEV</p>
                      <h5 className='font-bold text-xl hero-gradient-heading'>PROJECT CATEGORY</h5>
                      <p>WEBSITE</p>
                      <h5 className='font-bold text-xl hero-gradient-heading'>TECHNOLOGIES USED</h5>
                      <ul className='flex gap-3'>
                        <li><a href="">ReactJs</a></li>
                        <li><a href="">TailwindCss</a></li>
                        <li><a href="">Strapi</a></li>
                        <li><a href="">PostgreSql</a></li>
                      </ul>
                    </div>
                  </div>
                }
            
    </div>
      </div>
    {/* <button
      className="btn btn__secondary">VIEW
      MORE
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6Z"/></svg>
      </span>
    </button> */}

  </section>
  )
}

export default memo(Projects)