import './App.css';
import Numeros from './Components/Numeros/Numeros';
import NuevoNumero from './Components/NuevoNumero/NuevoNumero';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import {useState} from 'react';


function App() {

  const [numeros, setNumeros] = useState(
    [
     
      {
        id: Math.random(),
      
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
      <Header />
      <NuevoNumero addNumero={addNumero} />
      <Numeros numeros={numeros} />
      <Footer />
    </div>
  );
}

export default App;
