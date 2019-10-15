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

        {this.state.routePaths.map((routePath, index) =>
          <Route exact path={"/" + routePath} key={index} render={(props) => {
            return <GeneralList Elements={routePath} {...props} />
          }} />
        )}

      </React.Fragment>
    )
  }
}

export default ApplicationViews