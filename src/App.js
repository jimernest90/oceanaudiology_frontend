import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/shared/Header'
import About from '../src/screens/About'
import Child from '../src/screens/Child'
import Adult from '../src/screens/Adult'
import '../src/styles/custom.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Adult/>
      <Child/>
    </div>
  );
}

export default App;
