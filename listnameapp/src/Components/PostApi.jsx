import React from 'react'
import { Addform } from './Addform'

export const PostApi = () => {

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


  return (
     <div>  
          <h1>Post Api</h1>
             <Addform  onsubmit = {onsubmit}/>
      </div>
  )
}
