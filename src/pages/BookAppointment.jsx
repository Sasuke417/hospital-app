import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { appDetailsData } from "./data";
import { patientDetailsData } from "./data";

class BookAppointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      disease: "",
      appdate: "",
      slot: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleDropdownChange(e) {
    
    if(e.target.value === "N/A")
      alert("please select slot other than N/A")
    this.setState({ slot: e.target.value });
  }
  handleDropdownNameChange(e) {
    
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();
     
      let slot = this.slots.value;
      if(slot === "N/A" || this.state.name === "N/A")
      {
        alert("Please select slot and name values other than N/A")
      }
      else
      {
      alert("Appointment booked successfully");
      appDetailsData.add(
        this.state.name,
        this.state.disease,
        this.state.appdate,
        slot,
        this.state.description
      );
      this.props.history.push("/allAppointments");
    }
   }
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
       name.length > 4 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      description.length > 0
    );
  }
  render() {
    const names = patientDetailsData.getName();
    
    const isEnabled = this.canBeSubmitted();
    const date=new Date();

    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Booking Appointment
          </p>
        </div><div></div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Name
              </label>
              <select
                id="dropdown"
                className="FormField__Input"
                onChange={this.handleDropdownNameChange}
              >
                <option value="N/A">N/A</option>
                {names.map((name, index) => (
                  <option value={name} key={index}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="disease">
                Disease
              </label>
              <input
                type="text"
                id="disease"
                className="FormField__Input"
                placeholder="Enter the disease"
                name="disease"
                value={this.state.disease}
                onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="appdate">
                Appointment Date
              </label>
              <input
                type="date"
                id="appdate"
                className="FormField__Input"
                placeholder="Enter the appointment date"
                name="appdate"
                value={this.state.appdate}
                onChange={this.handleChange}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="slot">
                Slots
              </label>
              <input
                type="date"
                
                className="FormField__Input"
                placeholder="Enter the slot"
                name="slot"
                value={this.state.slot}
                onChange={this.handleChange}
              />
              <select
                
                className="FormField__Input"
                onChange={this.handleDropdownChange}
              >
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                className="FormField__Input"
                placeholder="Enter a description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="FormField">
              <button className="FormField__Button mr-20" disabled={!isEnabled}>
                Submit
              </button>
              <button
                className="FormField__Button mr-20"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookAppointment;