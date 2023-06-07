import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={Medilogo} alt="Medi-Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/addPatient">
                Add Patient
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/allPatients">
                All Patients
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/bookAppointment">
                Book Appointment
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/allAppointments">
                All Appointments
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/viewProfile">
                  View Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={ReactLink} to="/logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Example;
