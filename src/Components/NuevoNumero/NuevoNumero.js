import { useState } from 'react';



const NuevoNumero = (props) => {


    const [numa, setNuma] = useState('');
    const [numb, setNumb] = useState('');
    const [result, setResult] = useState('');



    const numaHandler = (event) => {
        setNuma(event.target.value);
    }
    const numbHandler = (event) => {
        setNumb(event.target.value);
    }
    const suma = function () {
        setResult(Number(numa) + Number(numb));
        alert('Resultado de la suma');
    };
    const resta = function () {
        setResult(numa - numb);
        alert('Resultado de la resta');
    };
    const multiplica = function () {
        setResult(numa * numb);
        alert('Resultado de la multiplicacion');
    };
    const division = function () {
        setResult(numa / numb);
        alert('Resultado de la division');
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const numero = {
            numa: numa,
            numb: numb,
        }
        props.addNumero(numero);
        setNuma('');
        setNumb('');
    }
    

    return (
        <form onSubmit={submitHandler}>

            <div>
                <label>Numero A: </label>
                <input onChange={numaHandler} type='number' value={numa} />
                <label>Numero B: </label>
                <input onChange={numbHandler} type='number' value={numb} />
            </div>
            <p></p>
            <div>

                <button onClick={suma}>SUMA</button>
                <button onClick={resta}>RESTA</button>
                <button onClick={multiplica}>MULTIPLICACION</button>
                <button onClick={division}>DIVISION</button>
            </div>
            <p></p>
            <div>
                <label>Resultado: <span>{result}</span></label>
            </div>
        </form>
    )
}

export default NuevoNumero;//Azul tiene que estar