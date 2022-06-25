import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components';

import store from '../redux/store';
import { Provider } from "react-redux";
import { setAuthToken } from '../utils';
import jwtDecode from 'jwt-decode';
import { logoutUser, setCurrentUser } from '../redux/actions/authActions';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // using useEffect here ensures that localStorage is defined before attempting to access it.
  useEffect(() => {
    if(localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwtDecode<JwtToken>(token);
      store.dispatch(setCurrentUser(decoded));
      const curTime = Date.now()/1000;
      if( decoded.exp < curTime ) {
        store.dispatch(logoutUser());
        window.location.href = "./login"
      }
    }
  })
  return(
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )

  
}

export default MyApp
