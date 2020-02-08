import React, { Component } from 'react';
import Header from "./Componente/Header";
import AgregarCita from './AgregarCitas';


class App extends Component {

  crearCita = () => {
    console.log("Hola Joaquin!!!")
  }
  render() {
     return (
    <div className="container">
      <Header 
           titulo= {'Administrador de Pecientes de Veterinaria'}
      />
      <div className="row">
        <div className="col-md-6">
          <AgregarCita
           crearCita = {this.crearCita}

          />

        </div>
        <div className="col-md-6"></div>
      </div>
      
      
    </div>
  );
  }
 
}

export default App;
