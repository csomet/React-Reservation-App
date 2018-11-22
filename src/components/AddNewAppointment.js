import React,{Component} from 'react';
import uuid from 'uuid';

export default class AddNewAppointment extends Component {

    state = {
        error: false
    }

    //Refs
    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();


    createNewAppointment = e =>  { 
        e.preventDefault();


       const pet =  this.petNameRef.current.value ,
             owner = this.ownerNameRef.current.value,  
             date  = this.dateRef.current.value ,
             time = this.timeRef.current.value ,
             symptoms = this.symptomsRef.current.value 

        if (pet === '' || owner === '' || date === '' || time === '' || symptoms === ''){     

            this.setState({
                error: true
            })

        } else {

            const newAppoint = {
                id       : uuid(),
                pet      : this.petNameRef.current.value,
                owner    : this.ownerNameRef.current.value,
                date     : this.dateRef.current.value,
                time     : this.timeRef.current.value,
                symptoms : this.symptomsRef.current.value
           }
           
           this.props.createNewAppointment(newAppoint);
           //reset form
           e.currentTarget.reset();

           this.setState({
               error: false
           })

        }

       
    }

    render() {

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Add new Patient</h2>
                <form onSubmit={this.createNewAppointment} >
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Pet's name</label>
                    <div className="col-sm-10 col-lg-10">
                        <input type="text" ref={this.petNameRef} className="form-control" placeholder="Nombre Mascota" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Owner's name</label>
                    <div className="col-sm-8 col-lg-10">
                        <input type="text" ref={this.ownerNameRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                        <input type="date" ref={this.dateRef}  className="form-control" />
                    </div>                            

                    <label className="col-sm-4 col-lg-2 col-form-label">Time</label>
                    <div className="col-sm-8 col-lg-4">
                        <input type="time" ref={this.timeRef}  className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea ref={this.symptomsRef}  className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Add</button>
                    </div>
                </div>
            </form>

            {this.state.error ? <div className="alert alert-danger text-center">All fields are mandatory</div> : ''}

                </div>    
            </div>
        );
    }
}