import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
     
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
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
            Adding a Patient
          </p>
        </div>
        <div><div></div></div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" disabled={!isEnabled}>
              Add Patient
            </button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPatient;