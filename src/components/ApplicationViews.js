import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/AnimalList'
import LocationList from './Locations/LocationList'
import EmployeeList from './Employees/EmployeeList'
import OwnerList from './Owners/OwnerList';

export default class ApplicationViews extends Component {
  state = {
    locations: [],
    animals: [],
    employees: []
  }

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:/animals")
    .then(r => r.json())
    .then(animals => newState.animals = animals)
    .then(() => fetch("http://localhost:/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
  }

  render() {
    return(
      <React.Fragment>
      <Route exact path="/" render={(props) => {
        return <LocationList locations={this.state.locations}/>
      }}/>
      <Route path="/animals" render={(props) => {
        return <AnimalList animals={this.state.animals}/>
      }}/>
      <Route path="/employees" render={(props) => {
        return <EmployeeList employees={this.state.employees}/>
      }}/>
      <Route path="/owners" render={(props) => {
        return <OwnerList owenrs={this.state.owners}/>
      }}/>
    </React.Fragment>
      )
  }
}
