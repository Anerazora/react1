import { useState } from 'react';

const NuevoNumero = (props) => {


    const [numa, setNuma] = useState('');
    const [numb, setNumb] = useState('');
    const [suma1, setSuma1] = useState('');
    const [result, setResult] = useState('');



    const numaHandler = (event) => {
        setNuma(event.target.value);

    }
    const numbHandler = (event) => {
        setNumb(event.target.value);

    }
    const sumaHandler = (event) => {
        setSuma1(event.target.value);

    }
    const suma = function () {
        setResult(numa + numb);
    };
    const resta = function () {
        setResult(numa - numb);
    };
    const multiplica = function () {
        setResult(numa * numb);
    };
    const division = function () {
        setResult(numa / numb);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const numero = {
            id: Math.random().toString(),
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
            <div>
                <button type="submit">SUMA</button>
                <button type="submit">RESTA</button>
                <button type="submit">MUTIPLICACION</button>
                <button type="submit">DIVISION</button>
            </div>
            <div>
                <label>Resultado: </label>
                <input onChange={sumaHandler} type='number' value={suma1} />
                <button onClick={suma}>Resultado de la suma</button>
                <button onClick={resta}>Resultado de la resta</button>
                <button onClick={multiplica}>Resultado de la multiplicacion</button>
                <button onClick={division}>Resultado de la division</button>
                <span>{result}</span>
            </div>
        </form>
    )
}

export default NuevoNumero;//Azul tiene que estar