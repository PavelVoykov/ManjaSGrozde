import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import Header from './Header/Header';

const ChatFooter = ({ socket }) => {
  const { register, handleSubmit } = useForm();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const onSubmit = (e) => {
    if (e.password!== e.confirm) {
      socket.emit('register', {name: e.name, password: e.password});
      console.log(e);
    }else{
      alert("Passwords do not match");
    }
  }

  return (
    <><Header/>
    <div className='deck'>
      <div className='card'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div><input className="element" type="text" name="name" {...register("name")} placeholder='Username' required/></div>
        <div><input className="element" type="password" name="password" {...register("password")} placeholder='Password' required/></div>
        <div><input className="element" type="password" name="confirm" {...register("confirm")} placeholder='Confirm Password' required/></div>

        <div><input className="element" type="submit" value="Register"/></div>
        </form>
      </div>
    </div>
    
    </>
  );
};

export default ChatFooter;