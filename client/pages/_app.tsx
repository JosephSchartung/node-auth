import '../styles/globals.css'
import App from "next/app";
import { Footer, Navbar } from '../components';

import store from '../redux/store';
import { Provider } from "react-redux";
import { setAuthToken } from '../utils';
import jwtDecode from 'jwt-decode';
import { logoutUser, setCurrentUser } from '../redux/actions/authActions';

export default class MyApp extends App {
  constructor(props:any) {
    super(props);
  }
  componentDidMount() {
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
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
    <Provider store={store}>
      <Navbar isAuthenticated={false}/>
      <Component {...pageProps} />
      <Footer />
    </Provider>
    )
  }
}