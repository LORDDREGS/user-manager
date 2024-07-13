// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    password: '',
    plant: '',
    department: '',
    position: '',
    roles: []
  });

  const { firstname, lastname, middlename, email, password, plant, department, position, roles } = formData;

  const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
    } else {
      console.error(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={firstname}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={lastname}
        onChange={onChange}
      />
      <input
        type="text"
        name="middlename"
        placeholder="Middle Name"
        value={middlename}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
      />
      <input
        type="text"
        name="plant"
        placeholder="Plant"
        value={plant}
        onChange={onChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={department}
        onChange={onChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={position}
        onChange={onChange}
      />
      <input
        type="text"
        name="roles"
        placeholder="Roles"
        value={roles}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
