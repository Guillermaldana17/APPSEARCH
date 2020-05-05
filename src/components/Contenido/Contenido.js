import React, { Component } from 'react'
import Image from './Image'
import Pagination from '../Paginacion';
class Contenido extends Component {
    
    render() {
        const imagenesOBJ = this.props.imagenes;

        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='row '>
                        {
                            imagenesOBJ.map(i => (
                                <div className='col-sm-6 col-md-3 mb-3'>
                                    <Image
                                        key={i.id}
                                        image={i}
                                    >
                                    </Image>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='col-sm-12 text-center'>
                    <Pagination
                    paginateAnterior={this.props.paginateAnterior}
                    paginateSiguiente= {this.props.paginateSiguiente}
                    >
                    </Pagination>
                </div>

            </div>
        )
    }
}
export default Contenido