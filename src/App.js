import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [planet, setPlanet] = useState("")

  useEffect(() => {
    axios.get('http://swapi.dev/api/planets/1').then((res) => {
      setPlanet(res.data)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <h2>Você está em {planet.name}!</h2>

          <div>População: {planet.population}</div>

          <div>Duração do dia: {planet.rotation_period}</div>
          
          <div>Duração do ano: {planet.orbital_period}</div>
          
        </div>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
