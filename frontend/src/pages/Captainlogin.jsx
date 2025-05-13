import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2 font-medium">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-xl mb-2 font-medium">Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
          >
            Login
          </button>

          <p className="text-center">
            Join a fleet? {''}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>

      {/* OPTIONAL: Change this link to go to another role if needed */}
      <div>
        <Link
          to="/login"
          className="flex items-center mb-5 justify-center bg-orange-500 text-white font-semibold rounded px-4 py-2 w-full text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
