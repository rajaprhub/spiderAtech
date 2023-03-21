import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../Styles/addform.module.css'

import { useForm } from 'react-hook-form';

export const Addform = () => {

    const [edata,setData] = useState ( {  
        name: "",  email:"",  company_name:"",  phone_number:"",  requirement:"", lead_types_id:""
    } )
  
     const handleInput = (event)=>{
        setData( {...edata,[event.target.name] : event.target.value})
     }

       const addformData = async ()=>{
        try {
         let res = await fetch(`https://dashboard.omnisellcrm.com/api/store`,{
                method: "POST",
                body: JSON.stringify(edata),
                headers: {
                  "Content-Type":"application/json"
                }
             })
             res = await res.json()
          } catch (error) {
            console.log(error)
          }
      }

     const handleSubmit =(e)=>{
        e.preventDefault();
      
         addformData()
          setData({  name: "", 
          email:"",
          company_name:"",
          phone_number:"",
          requirement:"",
          lead_types_id:""})
      }



  return (
    <>
         
         <div className={styles.container}>
          <form  onSubmit={handleSubmit} >

             <label>Name</label>
             <input type="text"    onChange ={handleInput}      name="name"          value = {edata.name}     placeholder=" enter name"/>
            
             <label>Email</label>
             <input type="email"   onChange ={handleInput}      name="email"         value = {edata.email}    placeholder="enter email"/>
          
             <label>Company Name</label>
             <input type="text"    onChange ={handleInput}      name="company_name"    value = {edata.company_name}   placeholder=" enter company_name"/>
           
             <label>Phone number</label>
             <input type="number"  onChange ={handleInput}      name="phone_number"   value = {edata.phone_number}    placeholder="enter phone_number"/>
            
             <label>Requirements</label>
             <input type="text"    onChange ={handleInput}      name="requirement "    value = {edata.requirement}      placeholder=" enter requirement"/>
            
             <label>lead_types_ids</label>
             <input type="text"    onChange ={handleInput}      name="lead_types_id"   value = {edata.lead_types_id}   placeholder=" enter lead_types_id "/>
           
             <button type="submit" className={styles.btn}>  Add Now</button>
          </form>

        </div>

    </>
  )
}
