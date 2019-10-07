import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard';
import APIManager from '../../modules/APIManager';

class CoffeeList extends Component {
    state = {
        allCoffee: []
    }

    getData = () => {
        APIManager.getAll("coffees").then((allCoffee) => {
            this.setState({
                allCoffee: allCoffee
            })
        })
    }

    componentDidMount() {
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        this.getData()
    }

    render() {
        console.log("pls render coffee")
        return (
            <>
                <h1>Coffee List</h1>
                {
                    this.state.allCoffee.map(coffee =>
                        <CoffeeCard key={coffee.id}
                            coffee={coffee}
                            {...this.props}
                            getData={this.getData}
                        />
                    )
                }
            </>
        )
    }
}

export default CoffeeList;