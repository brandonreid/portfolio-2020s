import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Auth, Hub } from 'aws-amplify';
import LittleHeader from '../components/LittleHeader';

import Layout from '../components/Layout';

const Login = () => {
  const username = 'guest';
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const logIn = async () => {
    setErrMsg('');
    setSubmitting(true);
    try {
      await Auth.signIn(username, password);
    } catch (error) {
      console.error(error.message);
      setErrMsg('Incorrect password, please try again.');
      setSubmitting(false);
    }
  };

  const rainbowSpiral = (
    <svg width="465" height="465" viewBox="0 0 465 465" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 199.446L209.127 209.127L199.446 232.5L209.127 255.873L232.5 265.554L255.873 255.873L265.554 232.5L255.873 209.127L232.5 199.446ZM276.439 188.561L232.5 170.36L188.561 188.561L170.36 232.5L188.561 276.439L232.5 294.64L276.439 276.439L294.64 232.5L276.439 188.561Z" fill="#876CAC"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 171.425L189.314 189.314L171.425 232.5L189.314 275.686L232.5 293.575L275.686 275.686L293.575 232.5L275.686 189.314L232.5 171.425ZM296.187 168.813L232.5 142.432L168.813 168.813L142.432 232.5L168.813 296.187L232.5 322.568L296.187 296.187L322.568 232.5L296.187 168.813Z" fill="#4A489B"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 142.23L168.67 168.67L142.23 232.5L168.67 296.331L232.5 322.77L296.331 296.331L322.77 232.5L296.331 168.67L232.5 142.23ZM316.923 148.077L232.5 113.108L148.077 148.077L113.108 232.5L148.077 316.923L232.5 351.892L316.923 316.923L351.892 232.5L316.923 148.077Z" fill="#4E6AAE"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 114.239L148.877 148.877L114.239 232.5L148.877 316.124L232.5 350.761L316.124 316.124L350.761 232.5L316.124 148.877L232.5 114.239ZM336.671 128.329L232.5 85.1802L128.329 128.329L85.1802 232.5L128.329 336.671L232.5 379.82L336.671 336.671L379.82 232.5L336.671 128.329Z" fill="#8BC265"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 86.1569L129.02 129.02L86.1569 232.5L129.02 335.98L232.5 378.843L335.98 335.98L378.843 232.5L335.98 129.02L232.5 86.1569ZM356.419 108.581L232.5 57.2522L108.581 108.581L57.2522 232.5L108.581 356.419L232.5 407.748L356.419 356.419L407.748 232.5L356.419 108.581Z" fill="#F5EB54"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 58.2131L109.26 109.261L58.213 232.5L109.26 355.739L232.5 406.787L355.739 355.739L406.787 232.5L355.739 109.261L232.5 58.2131ZM376.167 88.8331L232.5 29.3243L88.833 88.8331L29.3242 232.5L88.833 376.167L232.5 435.676L376.167 376.167L435.676 232.5L376.167 88.8331Z" fill="#E88241"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M232.5 28.9676L88.5809 88.5809L28.9676 232.5L88.5809 376.419L232.5 436.032L376.419 376.419L436.032 232.5L376.419 88.5809L232.5 28.9676ZM396.902 68.0977L232.5 0L68.0977 68.0977L0 232.5L68.0977 396.902L232.5 465L396.902 396.902L465 232.5L396.902 68.0977Z" fill="#DB3832"/>
    </svg>
  );

  return (
    <div className="the-door">

      <div className="the-door_peek-out">
        <div className="the-door_peek-out_cover">
          <div className="the-door_peek-out_cover-handle" />
        </div>
        <div className="the-door_peek-out_rainbow-1">{rainbowSpiral}</div>
        <div className="the-door_peek-out_rainbow-2">{rainbowSpiral}</div>
        <img src="/img/protected-port/my-face.png" alt="Brandon's Face" />
      </div>

      <label htmlFor="submitBtn">
        <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5L71.5 22H10.5L0 0.5Z" />
        </svg>
        <span>Please enter the password</span>
      </label>

      <form
        className={cn('the-door_input-btn-wrap', {
          'the-door_input-btn-wrap--submitting': submitting
        })}
        onSubmit={(e) => {
          e.preventDefault();
          logIn();
        }}
      >
        <input
          name="submitBtn"
          id="submitBtn"
          autoFocus
          type="password"
          value={password}
          disabled={submitting}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" disabled={!password || submitting}>
          {submitting ? 'Submitting' : 'Submit'}
        </button>
      </form>
      {errMsg && <p className="the-door_err-msg">{errMsg}</p>}
      <p className="the-door_general-msg">
        This work is password protected.<br />
        If you don’t have a password, feel free to email me at brandonreidak@gmail.com
      </p>
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
      <LittleHeader />
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
