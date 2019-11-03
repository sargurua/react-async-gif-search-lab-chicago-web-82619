import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitQuery(this.state.query)
    }

    updateHandeler = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render(){
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.updateHandeler}></input>
                <input type="submit"></input>
            </form>
        </div>
      )
    }
}