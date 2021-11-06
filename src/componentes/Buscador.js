import React from 'react';
//import "main.css";
class Buscador extends React.Component{

    referencia = React.createRef();
    
    obtenerBusqueda = (e) =>{
        e.preventDefault();
        this.props.obtenerDatos(this.referencia.current.value);
    }
    Style2(){
        return{
            border: "3px solid #4caf50",
            background: "none",
            color: "white"
        }
    }
    render(){
        return(
            <form onSubmit={this.obtenerBusqueda}>
                <div>
                    <div className = "form-group col-md-8">
                        <input ref = {this.referencia} type = "text" className="buscar" 
                        placeholder= "¿What are you looking for?"></input>
                    </div>
                    <div>
                        <input type="submit" value = "Buscar" className= "buscar" style= {this.Style2()}></input>
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador;