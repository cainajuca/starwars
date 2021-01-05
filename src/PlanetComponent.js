import React, { useEffect, useState } from "react"
import './App.css';
import PlanetsSwapi from "./api/swapi/planets.swapi.js"
import yoda from './babyYoda.png';
import logo from './logo512.png';

function App() {

  const [planet, setPlanet] = useState("");
  
  useEffect(() => {
    PlanetsSwapi.get(1).then((res) => setPlanet(res.data))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">

        <div className="images">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={yoda} className="Yoda" alt="yoda" />
        </div>
        
        <div>
          <h2>Você está em {planet.name}!</h2>

          <div>População: {planet.population}</div>

          <div>Duração do dia: {planet.rotation_period}</div>
          
          <div>Duração do ano: {planet.orbital_period}</div>
        </div>

        <button 
          type="button" 
          id="button" 
          name="button"
          onClick={() => {

            // gera um numero inteiro aleatorio entre 1 e 60 (range de planetas na SWAPI)
            let randNum = Math.floor((Math.random() * 60) + 1)

            PlanetsSwapi.get(randNum).then((res) => setPlanet(res.data))
          }}
          >Change Planet</button>

      </header>
    </div>
  );
}

export default App;
