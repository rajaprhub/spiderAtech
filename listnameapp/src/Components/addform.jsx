import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../Styles/addform.module.css'

import { useForm } from 'react-hook-form';

export const Addform = () => {

    const [data,setData] = useState ( {  
        name: "", 
        email:"",
        company_name:"",
        phone_number:"",
        requirement:"",
    } )


    const getdummypre = async  ()=>{
        try{
          let res = await fetch(`https://dashboard.omnisellcrm.com/api/store`)
          res = await res.json()
           console.log(res)
         }
            catch (error) {
            console.log(error)
        }
       }


     
    useEffect( ()=>{
        getdummypre()
     },[])






  return (
    <>
         
         <div className={styles.container}>
          <form  >
             <input type="text"       name="name"          placeholder=" enter name"/>
             <input type="email"      name="email"         placeholder="enter email"/>
             <input type="text"       name="company_name"  placeholder=" enter company_name"/>
             <input type="number"     name="phone_number"   placeholder="enter phone_number"/>
             <input type="text"       name="requirement "   placeholder=" enter requirement"/>
             <input type="text"       name="lead_types_id"   placeholder=" enter lead_types_id "/>
             <button type="submit" className={styles.btn}>  Add Now</button>
          </form>

        </div>

    </>
  )
}
