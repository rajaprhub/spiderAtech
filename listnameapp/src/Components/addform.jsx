import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/Form.module.css'


export const Addform = () => {
    const [submitSuccessful, setSubmitSuccessful] = useState('')
    let { register, handleSubmit, formState: { errors } } = useForm()
    const fillerrstyle = { color: 'maroon', fontWeight: 'Bold' }
    
   const onsubmit = (data) => {
      data = {
        name: data.name,
        email: data.name,
        company_name: data.company_name,
        phone_number: data.phone_number,
        phone_number: data.phone_number,
     }
     console.log(data)
         axios.post("https://dashboard.omnisellcrm.com/api/store", data ).then((res) => {
            console.log('response', res);
            setSubmitSuccessful('success')
         }).catch((err) => {
            console.log('err', err);
            setSubmitSuccessful('error')
        })
     }

    //   const clearinputt = ()=>  setinData({ 
    //   name: "", 
    //   email:"",
    //   company_name:"",
    //   phone_number:"",
    //   requirement:"",
    //   lead_types_id:"" })

    // const finalSubmit = (e)=>{
    //     e.preventDefault();
    //     addformData(indata)
    //     clearinputt()
    //   }
   

    return (
        <>

         <div className={styles.container}>
            
            <form className='form' onSubmit={handleSubmit(onsubmit)}>

               {submitSuccessful.length == 0 ? null : submitSuccessful === 'error' ?
                    <span style={{ color: 'red' }}>Submission failed</span> :
                    <span style={{ color: '#9ACD32' }}>Submitted successfully</span>}

                <label>Name</label>
                <input type="text"    
                name="name"    {...register("name", { required: true, minLength: 4 })} />
                {errors.name  && (<span style={fillerrstyle}>Please Fill out This Field</span>)}
                {errors.name && errors.name.type === "minLength" && (<span style={fillerrstyle}> with min 4 characters</span>)}
          
                
                <label>Email</label>
                <input type="email"     
                 name="email"     {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                {errors.email && errors.email.type === "required" && (<p style={fillerrstyle}>Please Fill out This Field</p>)}
                {errors.email  && errors.email.type === "pattern" && (<p style={fillerrstyle}>Enter valid email ID</p>)}


                <label>Company Name</label>
                <input type="text"  
                 name="company_name"   {...register("company_name", { required: true, minLength: 4 })} />
                {errors.company_name && errors.company_name.type === "required" && (<span style={fillerrstyle}>Please Fill out This Field</span>)}
                {errors.company_name && errors.company_name.type === "minLength" && (<span style={fillerrstyle}>min 4 characters</span>)}


                <label>Phone Number</label>
                <input type="number"  
                name='phone_number' {...register("phone_number", { required: true, pattern: /^[0-9]{10}$/ })} />
                {errors.phone_number && errors.phone_number.type === "required" && (<span style={fillerrstyle}>Please Fill out This Field</span>)}
                {errors.phone_number && errors.phone_number.type === "pattern" && (<span style={fillerrstyle}>Enter valid Phone number</span>)}

                
                <label>Company Name</label>
                <input type ="text"    
                   name="lead_types_id"  {...register("lead_types_id", { required: true, minLength: 4 })} />
                {errors.lead_types_id && errors.lead_types_id.type === "required" && (<span style={fillerrstyle}>Please Fill out This Field</span>)}
                {errors.lead_types_id && errors.lead_types_id.type === "minLength" && (<span style={fillerrstyle}>min 4 characters</span>)}
            
            
              <button type="submit"  className={styles.btn} >Submit</button>
            </form>
       </div>

        </>
    )
}

