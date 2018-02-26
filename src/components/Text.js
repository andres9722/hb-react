import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Text extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: false
        }
        this.toggle = this.toggle.bind(this)
    } 

    toggle () {
        this.setState({
            selected: !this.state.selected
        })
    }
    
    render () {
        const style =  {
            color: this.props.color,
            backgroundColor: this.state.selected ? 'yellow' : 'pink'
        }

        const selectedFlag = this.state.selected ? <p> Selected </p> : <p> No selected </p>

        return (
            <h1 onClick={this.toggle} style={style}> {this.props.text} {selectedFlag} </h1>
        )
    }
}