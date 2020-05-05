import React, { Component } from 'react'

class Buscador extends Component {


    onHandleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target[0].value;
        this.props.search(searchValue);

    }
    render() {
        return (
            <div className='body'>
                <form onSubmit={this.onHandleSubmit}>
                    <div className='row'>
                        <div className='form-group col-md-8'>
                            <input
                                name='search'
                                className='form-control form-control-lg'
                                type='text'
                                placeholder='Busca tu Imagen'>
                            </input>
                        </div>
                        <div className='form-group col-md-4'>
                            <button
                                className='btn btn-danger btn-lg btn-block'
                                type='submit'>
                                Buscar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Buscador;