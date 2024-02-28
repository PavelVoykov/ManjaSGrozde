import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';

const ChatFooter = ({ socket }) => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const onSubmit = (e) => {
    if(isAnonymous) {
      socket.emit('register', {name: 'Anonymous', password: e.password, isAnonymous: e.isAnonymous});
      console.log(e);
    }else{
      socket.emit('register', {name: e.name, password: e.password, isAnonymous: e.isAnonymous});
      console.log(e);

    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" {...register("name")} placeholder='Username'/>
      <input type="password" name="password" {...register("password")} placeholder='Password'/>
      <label for="isAnonymous">Be Anonymous</label>
      <input type="checkbox" name="isAnonymous" {...register("isAnonymous")}/>
      <button>SIGN IN</button>
    </form>
  );
};

export default ChatFooter;