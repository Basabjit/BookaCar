import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Becomeahost from './components/Becomeahost';
import Home from './components/Home';
import { mdb } from 'mdb-ui-kit'
import About from './components/About';
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/becomeahost"} element={<Becomeahost />} />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
