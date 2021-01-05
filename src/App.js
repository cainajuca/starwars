import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
// import axios from 'axios'

// export const PlanetComponent = () => {

//   const [planet, setPlanet] = useState("")

//   useEffect(() => {
//     axios.get('http://swapi.co/api/people/1').then((res) => {
//       setPlanet(res.data.name)
//     })
//   }, [])
  
//     return (
//       <div>
//         <h2> Você está em {planet}! </h2>
//       </div>
//     )
// }

function App() {

  const [planet, setPlanet] = useState("")

  useEffect(() => {
    setPlanet("Marte")
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
