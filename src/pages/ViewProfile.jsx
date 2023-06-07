import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {adminDetailsData} from "./data.js"
import "../App.css";




class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin : adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    
    const {admin} = this.state; 
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label htmlFor="name" className="FormField__Label">
                Name
              </label>
              <span id="name">{admin.name}</span>
            </div>

            <div className="FormField">
              <label htmlFor="email" className="FormField__Label">
                Email
              </label>
              <span id="email">{admin.email}</span>
            </div>

            <div className="FormField">
              <label htmlFor="dob" className="FormField__Label">
                Date of Birth
              </label>
              <span id="dob">{admin.dob}</span>
            </div>

            <div className="FormField">
              <label htmlFor="mobileno" className="FormField__Label">
                Mobile Number
              </label>
              <span id="mobileno">{admin.mobile}</span>
            </div>

            <div className="FormField">
              <label htmlFor="location" className="FormField__Label">
                Location
              </label>
              <span id="location">{admin.location}</span>
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

export default ViewProfile;