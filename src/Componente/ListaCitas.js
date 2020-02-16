import React ,{Component} from 'react';
import Cita from './Cita';


class ListaCistas extends Component {
    render(){
        const citas = this.props.citas;

        const mesaje = Object.keys(citas).length === 0 ? "No Hay Citas" : 'Administra tus Citas Aqui';
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title">{mesaje}</h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                keys={cita}
                                info={this.props.citas[cita]}
                                
                            />
                        ))}
                    </div>
                </div>
            </div>

        );

    }
}

export default ListaCistas;