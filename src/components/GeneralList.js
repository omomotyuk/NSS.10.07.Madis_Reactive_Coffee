import React, { Component } from 'react';
import GeneralCard from './GeneralCard';
import APIManager from '../modules/APIManager';

class GeneralList extends Component {
    state = {
        allElements: []
    }

    getData = (Elements) => {
        APIManager.getAll(Elements).then((allElements) => {
            this.setState(() => {
                return {
                    allElements: allElements
                }
            })
        })
    }

    componentDidMount() {
        console.log("General list: ComponentDidMount", this.props.Elements);
        this.getData(this.props.Elements)
    }

    render() {
        console.log("pls render Elements")
        return (
            <>
                <h1>{this.props.Elements} List</h1>
                {
                    this.state.allElements.map(element =>
                        <GeneralCard
                            key={element.id}
                            Elements={this.props.Elements}
                            element={element}
                            {...this.props}
                            getData={this.getData}
                        />
                    )
                }
            </>
        )
    }
}

export default GeneralList;