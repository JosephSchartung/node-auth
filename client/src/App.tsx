import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';

import store from './store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import setAuthToken from './utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { logoutUser, setCurrentUser } from './actions/authActions';


if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwtDecode<IJwtToken>(token);
  store.dispatch(setCurrentUser(decoded));
  const curTime = Date.now()/1000;
  if(decoded.exp < curTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App; 