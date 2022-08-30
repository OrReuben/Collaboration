import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import Contact from './component/Contact';
import { useState,useRef ,useEffect} from 'react';

function App() {
  
  const [firstName, setfirstName] = useState("")
  const [resonContact, setresonContact] = useState("")
  const [hearFromUs, sethearFromUs] = useState("")
  return (
    <div className="App">
      <Register />
      <Contact userName={"user"} setfirstName={setfirstName} setresonContact={setresonContact} sethearFromUs={sethearFromUs} ></Contact>
    <div>{firstName+resonContact+hearFromUs}</div>    </div>
  );
}

export default App;