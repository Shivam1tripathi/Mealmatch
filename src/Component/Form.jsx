import React, { useState } from 'react'




//Name, Address, Pincode, Mobile Number, Email, and Website


const Form = (props) => {

  // Resturent={props.Resturent} setResturent={props.setResturent}
 
const [Name,setName]=useState("");
const [Address,setAddress]=useState("");
const [Pincode,setPincode]=useState("");
const [Phone,setPhone]=useState("");
const [Email,setEmail]=useState("");
const [Website,setWebsite]=useState("");

const handleSubmit = (event) => {
  event.preventDefault();
};



  let visible={};
  if(props.clickcheck===true){
    visible={
      visibility:"visible",

    }
  }else{
    visible={
      visibility:"hidden",

    }
  }
  return (
    <form style={visible} onSubmit={handleSubmit} className='fixed md:left-1/3 bg-slate-600 max-md:w-8/12 w-4/12 min-h-3/4 top-20 shadow-2xl rounded-2xl py-6 flex justify-center flex-col items-center'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold ">Name</label>
    <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="form-control md:w-72 max-md:w-52  h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold">Address</label>
    <input type="text" value={Address} onChange={(e)=>setAddress(e.target.value)} className="form-control md:w-72 max-md:w-52 h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold">Pincode</label>
    <input type="number" value={Pincode} onChange={(e)=>setPincode(e.target.value)} className="form-control md:w-72 max-md:w-52 h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold">Phone</label>
    <input type="number" maxLength={9} value={Phone} onChange={(e)=>setPhone(e.target.value)} className="form-control md:w-72 max-md:w-52 h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold">Email</label>
    <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} className="form-control md:w-72 max-md:w-52 h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label font-bold">Website</label>
    <input type="url" value={Website} onChange={(e)=>setWebsite(e.target.value)} className="form-control md:w-72 max-md:w-52 h-7" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
<button type="submit" className="btn btn-primary" onClick={(e)=>props.addrest(Name,Address,Pincode,Phone,Email,Website)}>Submit</button>

 
</form>
    
  )
}


export default Form