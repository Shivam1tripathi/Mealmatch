import React from 'react'

const Navbar = (props) => {
  return (
   <div className='h-16 bg-slate-900 justify-between items-center sticky top-0 flex px-10'>
    <h1 className='font-bold text-blue-50 text-lg'>MealMatch</h1>
    <button className='bg-slate-100 w-28 h-10 rounded-sm hover:bg-blue-200 max-sm:w-24 font-bold max-sm:h-8' onClick={(e)=>props.click(props.clickcheck)}>{props.clickcheck ?(<h1 className='text-red-900'>X</h1>):(<>Add movies</>)}</button>
   </div>
  )
}

export default Navbar