import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: [],
        }
    }

    handleSubmit = (query) => {
        this.fetchGifs(query)
    }

    componentDidMount = () => {
        this.fetchGifs()
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({
                gifs: json.data
            })
        })
    }

    componentDidMount(query = "dolphins"){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({
                gifs: json.data
            })
        })
    }

    render(){
        return(
            <div>   
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitQuery={this.handleSubmit}/>
            </div>
        )
    }
}