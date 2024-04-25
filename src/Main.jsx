import React, { useState } from 'react'

import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import Footer from './Component/Footer';

const Main = () => {
const [Resturent,setResturent]=useState([]);
const [Click,setclick]=useState(false);
function EditResturent(Name,Address,Pincode,Phone,Email,Website,id) {
  console.log(Resturent);
  
  const newresturent={
    Name:Name,
    Address:Address,
    Pincode:Pincode,
    Phone:Phone,
    Email:Email,
    Website:Website
  }
  
  Resturent.splice(id,1);
  setResturent([...Resturent,newresturent]);
  console.log(Resturent);
}

  function clicked(clickcheck){
    if(clickcheck===true){
      setclick(false);
    }else{
      setclick(true);
    }
    console.log(Click);
    }
    // adding element
function addResturent(Name,Address,Pincode,Phone,Email,Website){
 const rest= Resturent.find((e)=>e.Name===Name);
 if(rest){
  alert("Already Exist")
  return;
 }
  if(Name!==""&&Address!==""&&Pincode!==""&&Phone!==""&&Email!==""&&Website!==""){
return setResturent([...Resturent,{
  Name:Name,
  Address:Address,
  Pincode:Pincode,
  Phone:Phone,
  Email:Email,
  Website:Website
}]);
  }
  return;
}
// deleting element
function dlete(id){
  let newListTodo = [...Resturent];
  newListTodo.splice(id,1)
  setResturent([...newListTodo])
}


  return (<>
    <Navbar click={clicked} clickcheck={Click} />
    
     <div className='rj w-full flex items-center flex-col'>
     <Form clickcheck={Click} addrest={addResturent} />
   {Resturent.length===0?(
     <h1 className='mt-44 text-7xl font-extrabold text-red-500'>Add Resturent</h1>
   )
   :(
      
      Resturent.map((e,i)=>{
        
        return <Card Name={e.Name} key={i} index={i} Address={e.Address} Pincode={e.Pincode} Phone={e.Phone} Email={e.Email} website={e.Website} Delete={dlete} EditResturent={EditResturent}/>
        
      })
    )}
     </div>
     <Footer/>
     </>
  )
}

export default Main