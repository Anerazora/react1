function Numero(props) {

   

   
    const numa = props.numero.numa;
    const numb = props.numero.numb;
    const result = props.numero.result;

   

    return (
        <div className='numero'>
            <div className='numero__descripcion'>
               
                <div className='numero__numa'>{numa}</div>
                <div className='numero__numb'>{numb}</div>
                <div className='numero__result'>{result}</div>
            </div>
            
        </div>
    )
}

export default Numero;//En azuk