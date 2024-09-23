import { Component } from 'react'

export class SearchResult extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        Resultados de busqueda de : {this.props.location.state.query}
      </div>
    )
  }
}

export default SearchResult
