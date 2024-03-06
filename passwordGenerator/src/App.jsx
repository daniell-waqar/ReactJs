import React, { useState } from 'react';
import './index.css'; 

const generatePassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='; // You can adjust the character set as needed
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setPassword(newPassword);
  };

  const handlePasswordLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setPasswordLength(length);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="password-generator">
      <h2>Password Generator</h2>
      <div className="input-container">
        <label>Password Length:</label>
        <input type="number" value={passwordLength} onChange={handlePasswordLengthChange} />
      </div>
      <button className="generate-btn" onClick={handleGeneratePassword}>Generate Password</button>
      {password && (
        <div className="password-container">
          <h3>Generated Password:</h3>
          <input type="text" className="password-input" readOnly value={password} />
          <button className="copy-btn" onClick={handleCopyPassword}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
