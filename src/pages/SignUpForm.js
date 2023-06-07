import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import {adminDetailsData} from "./data.js"

import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    
    e.preventDefault();
    
    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
        );
      this.setState({name: e.target.value});
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location
      
      
    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4 
      
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="uname">
                Username
              </label>
              <input
                type="text"
                id="uname"
                className="FormField__Input"
                placeholder="Enter your username"
                name="uname"
                value={this.state.uname}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="dob">
                Date of Birth
              </label>
              {/* <DatePicker
                id="dob"
                className="FormField__Input"
                selected={this.state.dob}
                onChange={(date) => this.setState({ dob: date })}
              /> */}
              <input
              type="date"
              id="dob"
              className="FormField__Input"
              placeholder="Enter your DOB"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="mobileno">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileno"
                className="FormField__Input"
                placeholder="Enter your mobile number"
                name="mobileno"
                value={this.state.mobileno}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="FormField__Input"
                placeholder="Enter your location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </div>

            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                disabled={!this.canBeSubmitted()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;