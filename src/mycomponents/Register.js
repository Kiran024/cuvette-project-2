// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import logo from './image 4.png'
import { Link } from 'react-router-dom';
import Login from './Login';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  });
  const handleinputchange = (event) => {
    let name = event.target.name
    let value = event.target.value
    
let obj = {
  ...formData,
  [name]:value
}
console.log(obj)
setFormData(obj)

  }

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log(response.data);
      // Redirect to the login page or perform other actions
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
       <div className='flex justify-center m-4'>
        <img src={logo} alt="" className='h-8'/>
        <h1 className='text-2xl font-bold'>Musicart</h1>
    </div>
        <form   onSubmit={handleRegister}>
    <div className='flex justify-center'>
    <div className='flex flex-col border-2 rounded-lg  w-96 px-7 py-5'>
        <h1 className='text-2xl pb-2'>Create Account</h1>
        <label htmlFor="name">            Your Name
        </label>
        <input type="text" onChange={handleinputchange} name='name'/>
        <label htmlFor="mobile"> 
        Mobile Number
        </label>
        <input type="number" onChange={handleinputchange} name='mobile' />
        <label htmlFor="email">
            Email Id
        </label>
        <input type="email" onChange={handleinputchange} name='email' />
        <label htmlFor="password">
            Password
        </label>
        <input type="text" className=''  onChange={handleinputchange} name='password'/>
        <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</p>
        <button type='submit' className='text-white bg-[#2E0052] pt-2 pb-2 mb-3 mt-3'>Continue</button>
        <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
    </div>
    </div>
        </form>
    <p className='text-center pt-4'>Already have an account? <Link to='/login'>Sign in</Link> </p><br/><br/>
    <div className='text-center bg-[#2E0052] text-white p-5'>
    Musicart | All rights reserved
    </div>
    
    </>
  );
};

export default Register;
