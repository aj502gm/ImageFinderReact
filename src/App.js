import React from 'react';
import "./componentes/Buscador.js"
import Buscador from './componentes/Buscador.js';
import "./main.css";
import Resultados from './componentes/Resultados.js';

class App extends React.Component {
  StyleCompleted(){
    return{
        align: "center",
        width:"50%",
        height:"100px",
       // background:"Red",
        margin: "30px 25%"
    }
  }
  state={
    termino: "",
    imagenes: []
  }
  consultarApi=()=>{
    const url = "https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=" + this.state.termino;
    //console.log(url);
    // 
    fetch(url)
      .then(out => out.json())
      .then(res => this.setState({imagenes: res.hits}))
  }


  datosBusqueda = (termino) =>{
    this.setState({
      termino
    }, () =>{
      //console.log(this.state);
      this.consultarApi();
    })
  }


  render(){
    return(
      <div className = "prin" style = {this.StyleCompleted()}>
        <div className = "jumbotron">
          <p className="lead text-center">Buscador imagenes</p>
          <Buscador obtenerDatos = {this.datosBusqueda}/>
          <Resultados datos = {this.state.imagenes}/>
        </div>
      </div>
    );
  }
}

export default App;
