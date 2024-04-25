import React, { useState } from 'react'

//Name, Address, Pincode, Mobile Number, Email, and Website


const Card = (props) => {
  const [edit,setedit]=useState(false);
  const [Name,setName]=useState("");
const [Address,setAddress]=useState("");
const [Pincode,setPincode]=useState("");
const [Phone,setPhone]=useState("");
const [Email,setEmail]=useState("");
const [Website,setWebsite]=useState("");

  function editresturent(Name,Address,Pincode,Phone,Email,Website,id) {
    let Name1=Name;
    let Address1=Address;
    let Pincode1=Pincode;
    let Phone1=Phone;
    let Email1=Email;
    let Website1=Website;
    if(Address===""){
      Address1=props.Address;
    }
    if(Name===""){
      Name1=props.Name;
    }
    if(Pincode===""){
      Pincode1=props.Pincode;
    }
    if(Phone===""){
      Phone1=props.Phone;
    
    }
    if(Email===""){
      Email1=props.Email;
    }
    if(Website===""){
      Website1=props.website;
    }
   
    
   
    props.EditResturent(Name1,Address1,Pincode1,Phone1,Email1,Website1,id);
  
  setedit(false)
  }
  return (
    edit===false?(
    <div className='bg-slate-300 w-3/4 max-md:w-4/5 min-h-48 mt-4 flex flex-col'>
      {/* nav section */}
      <div className='bg-slate-500 flex justify-between items-center md:pl-5 md:pr-5 min-h-12'>
        <div className='w-4/5 flex justify-center'>
      <h1 className='font-semibold text-3xl max-md:text-xl max-md:font-bold '>{props.Name}</h1>
      </div>
      <div className='w-1/5 flex justify-end mr-3'>
      <i className="fa-solid fa-pen mr-3 cursor-pointer" style={{color:"#ffff"}} onClick={(e)=>setedit(true)} ></i>
      <i className="fa-solid fa-trash cursor-pointer" style={{color:"#ffff"}} onClick={(e)=>props.Delete(props.index)}></i>
      </div>
      </div>

      <div className=' min-h-24 flex justify-between flex-row max-md:flex-col p-2'>
        <div className='w-2/4 max-md:w-full'>
          <h1 className='font-medium text-xl max-md:text-xs max-md:font-extrabold mt-2 md:mr-5 md:ml-10'><i className="fa-solid fa-location-dot" style={{color:"#0944aa"}} ></i> {props.Address}</h1>
          <h1 className='font-medium text-xl max-md:text-xs max-md:font-extrabold md:mt-2 mt-4 md:mr-5 md:ml-10 '><i className="fa-solid fa-thumbtack" style={{color:"#0944aa"}}></i> {props.Pincode}</h1>
        </div>
        <div className='w-2/4 max-md:w-full '>
           <h1 className='font-medium max-md:text-xs max-md:font-extrabold text-xl mt-2 md:mr-5'><i className="fa-solid fa-phone" style={{color:"#0944aa"}}></i> +91-{props.Phone}</h1>
           <h1 className='font-medium max-md:text-xs max-md:font-extrabold text-xl mt-2 md:mr-5'><i className="fa-solid fa-envelope max-md:fa-xs" style={{color:"#0944aa"}}></i> {props.Email}</h1>
        </div>
      </div>

      <div className='flex justify-center h-12'>
        <a className='font-medium text-xl max-md:text-lg max-mad:font-semibold mt-2 mr-5' href={props.website}><i class="fa-solid fa-globe" style={{color:"#265bb5"}}></i> {props.website}</a>
      </div>
    </div>


    ):(


      <div className='bg-slate-300 w-3/4 max-md:w-4/5 min-h-48 mt-4 flex flex-col'>
      {/* nav section */}
      <div className='bg-slate-500 flex justify-between items-center md:pl-5 min-h-12'>
        <div className='w-4/5 flex justify-between'>
      <input type='text' placeholder='Name' value={Name} onChange={(e)=>setName(e.target.value)} className='pl-4 font-semibold h-7 text-2xl max-md:text-xl max-md:font-bold max-md:h-6 max-md:w-52 max-md:ml-3'/>
      <button className='font-extrabold' onClick={(e)=>setedit(false)}>X</button>
      </div>             
      </div>

      <div className=' min-h-24 flex justify-between flex-row max-md:flex-col p-2'>
        <div className='w-2/4 max-md:w-full '>
          <input type='text' placeholder='Address' value={Address} onChange={(e)=>setAddress(e.target.value)} className='md:pl-4 pl-1 font-medium max-md:w-28 text-xl max-md:text-xs max-md:font-extrabold md:mt-2 md:mr-5 md:ml-10'/>
          <input type='number' placeholder='Pincode' value={Pincode} onChange={(e)=>setPincode(e.target.value)} className='pl-4 font-medium max-md:w-28 text-xl max-md:text-xs max-md:font-extrabold mt-2 md:mr-5 md:ml-10 '/>
        </div>
        <div className='w-2/4 max-md:w-full '>
           <input type='number' placeholder='Phone' value={Phone} onChange={(e)=>setPhone(e.target.value)} className='pl-4 font-medium max-md:w-28 max-md:text-xs max-md:font-extrabold text-xl mt-2 md:mr-5'/>
           <input type='email' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} className='pl-4 font-medium max-md:w-28 max-md:text-xs max-md:font-extrabold text-xl mt-2 md:mr-5'/>
        </div>
      </div>

      <div className='flex max-md:flex-col justify-center max-md:items-center h-8'>
        <input type='url' placeholder='Website' value={Website} onChange={(e)=>setWebsite(e.target.value)} className='pl-4 font-medium text-xl max-md:text-lg max-mad:font-semibold mr-5' />
        <button className='bg-black w-20 rounded-lg max-md:mt-2 text-white font-bold' onClick={(e)=>editresturent(Name,Address,Pincode,Phone,Email,Website,props.id)}>Submit</button>
      </div>
    </div>
    )
  )
}

export default Card