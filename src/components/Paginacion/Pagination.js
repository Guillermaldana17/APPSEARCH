import React from 'react'

const Pagination = (props) =>{
    return(
        <div className='py-3'>
        <button type='button' onClick={props.paginateAnterior} className='btn btn-info mr-1'>Anterior</button>
        <button type='button' onClick={props.paginateSiguiente} className='btn btn-info '>Siguiente</button>
        </div>
    )
}
export default Pagination