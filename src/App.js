import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.mingdao.com/api/',
  headers: { 'Access-Control-Allow-Origin': 'all' },
});

function App() {
  useEffect(() => {
    instance.get('Oauth2/genImageCaptcha').then(res => {
      console.log(res);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
