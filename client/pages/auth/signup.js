import { useState } from 'react';
import axios from 'axios'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    try {
        
        e.preventDefault();
        const res = await axios.post('/api/users/signup', {
            name,
            email,
            password,
        })
    } catch (error) {
        setError(error.response.data.errors[0].message)
    }
    
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span>{error}</span>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
