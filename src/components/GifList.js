import React, {Component} from 'react'

export default class GifList extends Component {
    render(){
        console.log(this.props.gifs)
        return (
            <ul>
                {this.props.gifs.map(gif => <li key={gif.id} ><img src={gif.images.original.url} alt=""/></li>)}
            </ul>
        )
    }
}