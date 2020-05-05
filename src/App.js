import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador'
import Contenido from './components/Contenido'

class App extends Component {
  state = {
    query: '',
    imagenes: [],
    pagina: ''
  }
  paginateAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina === 1) return null
    pagina -= 1;

    this.setState({ pagina: pagina },
      () => {
        this.getApi();
      })

  }
  paginateSiguiente = () => {
    let pagina = this.state.pagina;

    pagina++;

    this.setState({ pagina: pagina }, () => {
      this.getApi();
    })


  }
  getApi = async () => {
    const queries = this.state.query;
    const paginate = this.state.pagina;
    const URI = 'https://pixabay.com/api/?key=16364773-bcf7df545c3477662468ad52b&per_page=30&q=';
    const data = await fetch(URI + queries + '&page=' + paginate);

    const result = await data.json();
    this.setState({ imagenes: result.hits })
    console.log(this.state.imagenes);
  }
  search = (q) => {
    this.setState({
      query: q,
      pagina: 1
    })

    this.getApi();

  }
  render() {
    return (
      <div className="App container body">
        <div className='row'>
          <div className='col-sm-12 mt-2'>
            <div className='jumbotron backgroundf'>
              <p className='lead text-center text-white'>Buscador de Imagenes</p>
              <Buscador
                search={this.search}
              />
            </div>
            <div className='col-sm-12'>
              <Contenido
                imagenes={this.state.imagenes}
                paginateAnterior={this.paginateAnterior}
                paginateSiguiente={this.paginateSiguiente}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
