import React from 'react'
import "./signuppage.scss"
import { useForm } from "react-hook-form";


function Signuppage() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className='signuppage'>

      <div className="signup-container">

       <div className="wrapper">
       <form className='form-data' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='First Name' {...register("firstName", { required: true, maxLength: 20 })} />
      <input placeholder='Last Name' {...register("lastName", { required: true, maxLength: 20 })} />
      <input placeholder='Email Address' type='email'  {...register("email", { required: true, minLength: 3 })}   />
      <input placeholder='Password' type="password" {...register("password", { min: 8, max:20 })} />

      <input value="Sign Up" className='submit-btn' type="submit" />
    </form>

        </div>
      </div>

        <div className="image-container">
        <img src='/bg.png' alt='background image' />

      </div>
      
    </div>
  )
}

export default Signuppage

