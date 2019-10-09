import React, { Component } from 'react'
import { Route } from "react-router-dom"
//import CoffeeList from "./coffee/CoffeeList"
import GeneralList from "./GeneralList"



class ApplicationViews extends Component {

  state = {
    routePaths: ["coffees", "pastries", "employees", "stores"]
  }



  render() {
    return (
      <React.Fragment>
        {/*
        <Route exact path="/coffee" render={(props) => {
          return <CoffeeList />
        }} />
      */}

        {this.state.routePaths.map(routePath =>
          <Route exact path={"/" + routePath} render={(props) => {
            return <GeneralList {...props} Elements={routePath} />
          }} />
        )}

        {/*
        <Route exact path="/coffee" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[0]} />
        }} />

        <Route exact path="/pastries" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[1]} />
        }} />

        <Route exact path="/employees" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[2]} />
        }} />

        <Route exact path="/stores" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[3]} />
        }} />

        <Route exact path="/general" render={(props) => {
          return <GeneralList Elements={this.state.routePaths[0]} />
        }} />
      */}
      </React.Fragment>
    )
  }
}

export default ApplicationViews