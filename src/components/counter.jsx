// import React,{ useState, createRef } from 'react'

// const Counter = () => {

  
// const [counter, setcounter] = useState(0); 
// const numRef = createRef();

// const increment = () => {
//   setcounter(value => value + 1)
// }

// const decrement = () => {
//     setcounter(value => value - 1)
// }

//   return (
//     <div className='h-screen flex flex-col gap-5 justify-center items-center'>

//         <h1 className='font-bold text-4xl'>Counter</h1>
//         <div className='flex justify-center pl-2 items-center rounded-3xl bg-blue-800 w-32 h-20 gap-2'>
//         {
//           <input type="number" className='h-10 w-16 appearance-none rounded-2xl' ref={numRef} value={counter}/>
//         }
//         <div className='flex flex-col font-bold text-white text-2xl'>
//         <button type='button' onClick={increment}>^</button>
//         <button type='button' className='rotate-180' onClick={decrement}>^</button>
//         </div>
//         </div>
//     </div>
  
//   )
// }

// export default Counter;