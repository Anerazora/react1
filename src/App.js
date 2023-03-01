import './App.css';
import Numeros from './Components/Numeros/Numeros';
import NuevoNumero from './Components/NuevoNumero/NuevoNumero';
import {useState} from 'react';


function App() {

  const [numeros, setNumeros] = useState(
    [
     
      {
        id: Math.random().toString(),
        precio: 10.50
      }
    ]
  )

  const addNumero = (numero) => {
    setNumeros((prevNumeros) => {
      return [numero, ...prevNumeros];
    });
  }

  return (
    <div>
      
      <NuevoNumero addNumero={addNumero} />
      <Numeros numeros={numeros} />
      
    </div>
  );
}

export default App;
