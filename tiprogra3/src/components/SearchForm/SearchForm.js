import { Component } from 'react'
import "./SearchForm.css"
import {  Route } from "react-router-dom";


class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }


    handleInputChange(e) {
        this.setState({
          query: e.target.value
        });
    }


    handleInputSubmit() {
        this.props.history.push(`/search`, { query: this.state.query })
    }


    render() {
        return (
            <div>
                <input onChange={(e) => this.handleInputChange(e)} type="text" name="query" value={this.state.query} />
                <button onClick={() => this.handleInputSubmit()} >Buscar</button>
            </div>
        )
    }
}

export default SearchForm
