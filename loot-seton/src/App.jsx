import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Parse from 'parse'
import Components from './Components/Components.jsx'

// This is what prof said to do in class
const Env = {
  APPLICATION_ID: "IQNjmOWmb0mI8XYYJHmvuHl40vgns95GDMBLCDe7",
  JAVASCRIPT_KEY: "U5mqLSIMIVzCxYLRptCxskgdtVCzhiz6y91kBnVZ",
  SERVER_URL: "https://parseapi.back4app.com",
}

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />
}
  //const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Components />
//     </div>
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   )
// }

export default App
