import React,{ useCallback, useRef, memo } from 'react';

const Form = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submit = useCallback(async(e) => {
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Message = messageRef.current.value;
  
    e.preventDefault()
  
    const formData = {
      data:
      {
      Name,
      Email,
      Message
    }
  }
   
    try {
      await fetch("http://localhost:1337/api/forms" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
          body: JSON.stringify(formData),
        });
      
    } catch (error) {
      return new Error('Error occured');
    }
  
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  
  
  })

  return (
    <form id="contact" className=" container mx-auto py-20" onSubmit={submit}>
    <section className=" flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center pb-10">
        <h5 className="text-2xl font-bold hero-gradient-heading pb-3">CONTACT US</h5>
        <p className="text-3xl font-bold">GET IN TOUCH</p>
      </div>
      <div className="pb-20 lg:px-72 px-6 w-full">
        <div className="grid md:grid-cols-2 md:gap-6 pb-4">
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-700 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" " required  pattern="[a-zA-Z]*" ref={nameRef}/>
            <label htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input type="email" name="email" id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-700 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" " required ref={emailRef} />
            <label htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email</label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <textarea type="text" name="message" id="message"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-700 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" " ref={messageRef} ></textarea>
          <label htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Message</label>
        </div>
      </div>

      <button type="submit" aria-label="submit form"
        className="btn btn__secondary">SEND
        MESSAGE
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m14 18-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45 14 6l6 6Z"/></svg>
        </span>
      </button>
    </section>
  </form>
  )
}

export default memo(Form);