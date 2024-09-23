import React, { useState } from 'react';

function PasswordGenerator() {
  
  const [password, setPassword] = useState('');


  const generatePassword = () => {
    const length = 16; 
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator</h2>
      <input type="text" value={password} readOnly style={styles.input} />
      <button onClick={generatePassword} style={styles.button}>
        Generate Password
      </button>
    </div>
  );
}

// Some basic styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    backgroundColor: '#202020',
    color: '#fff',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '250px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PasswordGenerator;
