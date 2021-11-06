import React from 'react'
import "./imageframes.css";
class Resultados extends React.Component {
    buscar = () =>{
        return(
            console.log(this.props.datos),
            <React.Fragment>
                <div className="main-frame">
                    {this.props.datos.map(imagen =>(
                        <div className="subframes">
                           
                            <img src = {imagen.previewURL} className="imagen"></img>
                            <p className="desc">Views: {imagen.views} <br></br>
                               Likes: {imagen.likes} <br></br>
                               Downloads: {imagen.downloads}</p>
                            
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.buscar()}
            </React.Fragment>
        )
    }
}

export default Resultados;