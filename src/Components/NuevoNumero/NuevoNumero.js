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
            <label>---------------------------------</label>
            <label>Seleccione operación </label>
            <label>------------------------------------------</label>
            </div>
            <div>

                <button onClick={suma}>Resultado de la suma</button>
                <button onClick={resta}>Resultado de la resta</button>
                <button onClick={multiplica}>Resultado de la multiplicacion</button>
                <button onClick={division}>Resultado de la division</button>
            </div>
            <div>
                <label>Resultado: <span>{result}</span></label>
            </div>
        </form>
    )
}

export default NuevoNumero;//Azul tiene que estar