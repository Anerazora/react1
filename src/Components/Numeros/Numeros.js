import Numero from './Numero';

function Numeros(props) {
    return (
        <div>
            {props.numeros.map((elemento) => {
                return (
                    <Numero key={elemento.id} numero={elemento} />
                )
            })}
        </div>
    )
}

export default Numeros;//En azul