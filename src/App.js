import React, { Component } from 'react';
import Header from "./Componente/Header";
import AgregarCita from './Componente/AgregarCitas';
import ListaCitas from './Componente/ListaCitas';



class App extends Component {
  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);

    const citas = [...this.state.citas, nuevaCita];

    console.log(citas);

    this.setState({
      citas
    });


   
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
        <div className="col-md-6">
          <ListaCitas
           citas ={this.state.citas}
          />
        </div>
      </div>
  
    </div>
  );
  }
 
}

export default App;
