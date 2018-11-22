import React,{Component} from 'react';
import Appoint from './Appoint';

export default class AppointList extends Component {

    render() {

        const appnt = this.props.appointments;

        const message = Object.keys(appnt).length === 0 ? 'No appointments' : 'Admin your appointments';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.appointments).map(appoint => (
                            <Appoint key={appoint} 
                                     info={this.props.appointments[appoint]} 
                                     deleteAppointment={this.props.deleteAppointment}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}