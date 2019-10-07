import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIManager from '../../modules/APIManager'

class CoffeeCard extends Component {

    handleDelete = (id) => {
        APIManager.delete("coffees", id)
            .then(() => this.props.getData())
    }

    render() {
        return (
            <Card body>
                <CardTitle>{this.props.coffee.name}</CardTitle>
                <CardText>It's good</CardText>
                <Button color="primary" >Details</Button>
                <Button color="danger" onClick={() => this.handleDelete(this.props.coffee.id)}>Delete</Button>

                {/*           <button type="button" onClick={() => this.handleDelete(this.props.animal.id)}>Discharge</button>
*/}
            </Card>
        )
    }
}

export default CoffeeCard