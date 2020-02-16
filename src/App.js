import React, { Component } from 'react';
import Header from "./Componente/Header";
import AgregarCita from './Componente/AgregarCitas';
import ListaCitas from './Componente/ListaCitas';





class App extends Component {
  state = {
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }


  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);

    const citas = [...this.state.citas, nuevaCita];

    

    this.setState({
      citas
    });
    }
    borrarCita = id => {
      
      // Obtener copia del el state
      const citasActuales = [...this.state.citas];

      //borrar el elemeno del state
      const citas = citasActuales.filter(cita => cita.id !== id);

      // actualiza el state
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
           borrarCita = {this.borrarCita}
          />
        </div>
      </div>
  
    </div>
  );
  }
 
}

export default App;
