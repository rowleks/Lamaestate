import React from 'react'
import "./signinpage.scss"
import { useForm } from "react-hook-form";


function Signinpage() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className='signuppage'>

      <div className="signup-container">

       <div className="wrapper">
       <form className='form-data' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Email Address' type='email'  {...register("email", { required: true, minLength: 3 })}   />
      <input placeholder='Password' type="password" {...register("password", { min: 8, max:20 })} />

      <input className='submit-btn' type="submit" value="Sign In" />
    </form>

        </div>
      </div>

        <div className="image-container">
        <img src='/bg.png' alt='background image' />

      </div>
      
    </div>
  )
}

export default Signinpage

