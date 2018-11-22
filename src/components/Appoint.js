import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Appoint extends Component {

    deleteAppoint = () => {
        //In this component we have this.props.info.id -> for this particular element so we pass it
        //we call function from props (parent given)
        this.props.deleteAppointment(this.props.info.id);
    }

    render() {
        const {date, time, owner, pet, symptoms, id} = this.props.info
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-o">{pet}</h3>
                    <p className="card-text"><span>Owner:</span> {owner}</p>
                    <p className="card-text"><span>Date:</span> {date}</p>
                    <p className="card-text"><span>Time:</span> {time}</p>
                    <p className="card-text"><span>Symptoms:</span></p>
                    <p className="card-text">{symptoms}</p>
                    
                    <button className="btn btn-danger" onClick={this.deleteAppoint}>Delete </button>
                </div>
            </div>
        );
    }
}

Appoint.propTypes = {
    deleteAppointment : PropTypes.func.isRequired

}