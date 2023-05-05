import { useState } from 'react'
import Input from '../../shared/components/FormElement/Input/Input'

const Signin = () => {
   
  
  return ( 
    <form>
        <Input
          id="first_name"
          type="text"
          placeHolder="first name"
          label="First Name"
          inputElement="input"

        />
    </form>
  );
}
 
export default Signin;