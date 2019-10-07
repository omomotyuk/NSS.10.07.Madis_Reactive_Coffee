import React, { Component } from 'react'
import { Route } from "react-router-dom"
import CoffeeList from "./coffee/CoffeeList"
import GeneralList from "./GeneralList"



class ApplicationViews extends Component {

  state = {
    routePaths: ["coffees", "pastries", "employees", "stores", "menu"]
  }



  render() {
    return (
      <React.Fragment>
        <Route exact path="/coffee" render={(props) => {
          return <CoffeeList />
        }} />

        <Route exact path="/general" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[0]} />
        }} />




      </React.Fragment>
    )
  }
}

export default ApplicationViews