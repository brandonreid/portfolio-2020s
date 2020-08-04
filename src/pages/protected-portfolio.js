import React, { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

import Layout from '../components/Layout';

const Login = () => {
  const username = 'guest';
  const [password, setPassword] = useState('');

  const logIn = async () => {
    try {
      await Auth.signIn(username, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={() => {
        logIn();
      }}>Submit</button>
    </div>
  );
};

const ProtectedPortfolio = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };

    Hub.listen('auth', updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove('auth', updateUser); // cleanup
  }, [user, setUser]);

  const logOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout {...props} title="My Work">
      {!user ? <Login /> : (
        <>
          <h1>View Portfolio</h1>
          <button onClick={() => {
            logOut();
          }}>Logout</button>
        </>
      )}
    </Layout>
  );
};

export default ProtectedPortfolio;
