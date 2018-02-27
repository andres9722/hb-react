import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import randomColor from 'randomcolor'

export default class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const style = {
      color: this.props.color,
      backgroundColor: this.state.selected ? randomColor({luminosity: 'light', hue: 'random'}) : randomColor({luminosity: 'light', hue: 'random'})
    }

    return (
      <h1 className='text' onClick={this.toggle} style={style}> {this.props.text.toUpperCase()} </h1>
    )
  }
}