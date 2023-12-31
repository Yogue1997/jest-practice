import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </>
  );
}

export default App;
  