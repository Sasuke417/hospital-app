import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
     patient : patientDetailsData.viewPatientDetails(props.match.params.id)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const {patient} = this.state;
    if(!patient) {
      return <h1>No patients found</h1>
    }
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          <form className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name" id="name">
                Name
              </label>
              <span>{patient.name}</span>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email" id="email">
                Email
              </label>
              <span>{patient.email}</span>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="dob" id="dob">
                Date of Birth
              </label>
              <span>{patient.dob}</span>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="location" id="location">
                Location
              </label>
              <span>{patient.location}</span>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="mobile" id="mobile">
                Mobile
              </label>
              <span>{patient.mobile}</span>
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
export default ViewPatient;