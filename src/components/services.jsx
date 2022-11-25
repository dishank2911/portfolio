import React,{ memo } from 'react'

const Services = () => {
  return (
    <main className="bg-gray-100" id="services">
    <section className="container mx-auto flex flex-col justify-center items-center py-20">
      <div className="pb-4">
        <h4 className="text-2xl font-bold hero-gradient-heading pb-4">SERVICES</h4>
      </div>
      <div className=" pb-4">
        <h5 className="text-3xl font-bold">WHAT CAN I DO</h5>
      </div>
      <div className="text-lg pb-10 text-center px-4">
        I design and develop services for customers of all sizes, specializing in creating stylish and modern websites.
      </div>
      <div>

        <div className="flex gap-10 flex-wrap justify-center">
          <div
            className=" box-border min-h-[350px] max-w-[350px] p-5 text-center bg-[#292727] rounded-3xl text-white flex flex-col flex-wrap transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 hover:shadow-[10px_7px_5px_#000000]">
            {/* <span className="material-symbols-outlined hero-gradient-heading pb-4 ">
              desktop_mac
            </span> */}
            <span className='flex justify-center pb-4'><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/></svg></span>
            <h5 className="hero-gradient-heading font-bold text-xl text-center pb-5"> WEB DEVELOPMENT </h5>
            <p>I can provide you a dynamic and responsive website using latest frameworks.</p>
          </div>
          <div
            className="box-border min-h-[350px] max-w-[350px] p-5 text-center bg-[#292727] rounded-3xl text-white flex flex-col flex-wrap transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 hover:shadow-[10px_7px_5px_#000000]">
            {/* <span className="material-symbols-outlined hero-gradient-heading pb-4">
              database
            </span> */}
            <span className='flex justify-center pb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
            </span>
            <h5 className="hero-gradient-heading font-bold text-xl text-center pb-5">BACK-END DEVELOPMENT </h5>
            <p>I can provide you a fast website fetching using latest frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default memo(Services)