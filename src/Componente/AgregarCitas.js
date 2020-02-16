 import React, {Component} from 'react';
 import uuid from 'uuid';

 class AgregarCita extends Component {
     // Refs

     NombreMascotaRef = React.createRef();
     NombreDuenoRef = React.createRef();
     fechaRef = React.createRef();
     horaRef = React.createRef();
     sintomasRef = React.createRef();







    state ={ 
      error: false  
    }

    crearNuevaCita = e => {
        e.preventDefault();

        const mascota = this.NombreMascotaRef.current.value,
              Propiestario =this.NombreDuenoRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;

              if(mascota === '' || Propiestario === '' || fecha === '' || hora === '' || sintomas === '') {
                  this.setState({
                  error: true
              })
              }else {
                const nuevaCita = {
                    id: uuid(),
                    mascota,
                    Propiestario,
                    fecha,
                    hora,
                    sintomas
                }
                  // se enviar el objecto al padre para actualizar el state
                this.props.crearCita(nuevaCita);

                // se reinicia el formulario
                e.currentTarget.reset();

                // Elimar el error
                this.setState({
                    error: false
                })
              }
              

        
        
        
    }

 
     render() {

        const existeError = this.state.error;

         return(
             <div className="card mt-5">
                 <div className="card-body">
                   <h2 className="card-title text-center mb-5">Agrega las Citas Aqui</h2>
                   <form onSubmit= {this.crearNuevaCita}>
                       <div className="form-group row">
                           <label className="col-sm-4 col-lg-3 col-form-label"> Nombre Mascota</label>
                           <div className="col-sm-8 col-lg-9">
                               <input ref={this.NombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                           </div>
                       </div>

                       <div className="form-group row">
                           <label className="col-sm-4 col-lg-3 col-form-label ">Dueño Mascota</label>
                           <div className="col-sm-8 col-lg-9">
                               <input ref={this.NombreDuenoRef} type="text" className="form-control" placeholder="Nombre Dueño Mascota" />
                           </div>
                       </div>
                       <div className="form-group row">
                           <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                           <div className="col-sm-8 col-lg-4 mb-4  mb-lg-0">
                               <input ref={this.fechaRef} type="date" className="form-control" />
                           </div>

                           <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                               <input ref={this.horaRef} type="time" className="form-control" />
                           </div>
                       </div>
                    

                       <div className="form-group row">
                           <label className ="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                           <div className="col-sm-8 col-lg-9">
                               <textarea ref={this.sintomasRef} className="form-control"></textarea>
                           </div>
                       </div>

                       <div className="form-group row justify-content-end">
                           <div className="col-sm-3">
                               <button type="submit" className="btn btn-success w100">Agregar</button>
                           </div>
                       </div>
                   </form>
                   { existeError ? <div className="alert alert-danger btn-danger text-center">Todos los Campos Son Obligatorios</div> : '' }
                 </div>    
             </div>
         )
     }
 }

 export default AgregarCita;