import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components';

import store from '../redux/store';
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )

  
}

export default MyApp
