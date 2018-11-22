import React, { Component } from 'react';
import Header from './components/Header';
import AddNewAppointment from './components/AddNewAppointment';
import AppointList from './components/AppointList';


class App extends Component {

  state = {
    appointment: []
  }

  componentDidMount(){
    const storedAppointments = localStorage.getItem('data');
    if (storedAppointments){
      this.setState({
        appointment : JSON.parse(storedAppointments)
        //Recover from localStorage when refresh page. Parse from string to JSON (Objetct)
      })
    }

  }

  componentDidUpdate(){

    //store in localStorage.
    localStorage.setItem(
        'data',
        JSON.stringify(this.state.appointment)
        //Convert from JSON (Object) to String
    )
  }

  createNewAppointment = newAppoint => {
    
    const appmntCopy = [...this.state.appointment, newAppoint]

    this.setState({
        appointment : appmntCopy
    });
     
  }

  deleteAppointment = id => {
    
    //read state 
    const copyAppointments = [...this.state.appointment];

    //filter to delete
    const procesedAppointments = copyAppointments.filter(appoint => appoint.id !== id)

    //set the state
    this.setState({
      appointment: procesedAppointments
    })
  }

  render() {
    return (
      <div className="container">
          <Header title={'Vet Patients Manager'} />
     
      <div className="row">
          <div className="col-md-6">
              <AddNewAppointment createNewAppointment={this.createNewAppointment}/>
          </div>
          <div className="col-md-6">
              <AppointList appointments = {this.state.appointment}
                            deleteAppointment={this.deleteAppointment}/>
          </div>
      </div>
     
      </div>
     
    );
  }
}

export default App;
