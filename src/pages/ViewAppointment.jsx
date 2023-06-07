import React, { Component } from "react";
import NavBar from "./NavBar";
import {appDetailsData} from "./data.js"

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     appointment : appDetailsData.getAppointmentDetails(props.match.params.appId)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
   const {appointment} = this.state;
   if(!appointment) {
     return <h1>No appointments found</h1>
   }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em",
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label htmlFor="name" className="FormField__Label">
                Name
              </label>
              <span id="name">{appointment.name}</span>
            </div>
            <div className="FormField">
              <label htmlFor="appdate" className="FormField__Label">
                Appointment Date
              </label>
              <span id="appdate">{appointment.appdate}</span>
            </div>
            <div className="FormField">
              <label htmlFor="slot" className="FormField__Label">
                Slot
              </label>
              <span id="slot">{appointment.slot}</span>
            </div>
            <div className="FormField">
              <label htmlFor="description" className="FormField__Label">
                Description
              </label>
              <span id="description">{appointment.description}</span>
            </div>
            <div className="FormField">
              <label htmlFor="disease" className="FormField__Label">
                Disease
              </label>
              <span id="disease">{appointment.disease}</span>
            </div>
            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                onClick={this.handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;