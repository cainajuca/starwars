import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [planet, setPlanet] = useState("")

  useEffect(() => {
    // setPlanet("Marte")
    axios.get('http://swapi.dev/api/planets/1').then((res) => {
      setPlanet(res.data.name)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Você está em {planet}!
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
