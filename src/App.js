import React from 'react';
import Navbar from './components/layouts/Navbar';
import Userdetails from './components/Userdetails';

function App() {
  return (
    <div className="App">
      <Navbar appName = "Github Users"/>
      <Userdetails></Userdetails>
    </div>
  );
}

export default App;
