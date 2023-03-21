import React, { useEffect } from 'react'
import { useState } from 'react'

import styles from '../Styles/addform.module.css'


export const Addform = () => {
  return (
    <>
         
         <div className={styles.container}>
          <form  >
             <input type="text"      name="name"           placeholder=" enter name"/>
             <input type="email"      name="email"         placeholder="email"/>
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
