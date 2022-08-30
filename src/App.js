import { useState } from 'react';
import './App.css';
import Register from './Components/Register/Register';


function App() {
  const [userName,setUserName] = useState('')

  return (
    <div className="App">
      <Register 
      userName = {userName}
      setUserName = {setUserName}
      />
    </div>
  );
}

export default App;
