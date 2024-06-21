import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './registrationSlice';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormErrors({ ...formErrors, emailError: 'Invalid email format' });
      return;
    } else {
      setFormErrors({ ...formErrors, emailError: '' });
    }

    if (!validatePassword(formData.password)) {
      setFormErrors({ ...formErrors, passwordError: 'Password must be at least 6 characters long' });
      return;
    } else {
      setFormErrors({ ...formErrors, passwordError: '' });
    }

    dispatch(register(formData));
    alert('Registration successful!');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.emailError && <span className="error">{formErrors.emailError}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.passwordError && <span className="error">{formErrors.passwordError}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;