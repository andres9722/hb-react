import React from 'react'
import ReactDOM from 'react-dom'
import Text from './Text'
import randomColor from 'randomcolor'

export default function MyComponent() {
  return (
    <React.Fragment>
      <Text text="peru" color={randomColor({luminosity: 'dark', hue: 'random'})} />
      <Text text="colombia" color={randomColor({luminosity: 'dark', hue: 'random'})} />
      <Text text="japon" color={randomColor({luminosity: 'dark', hue: 'random'})} />
      <Text text="china" color={randomColor({luminosity: 'dark', hue: 'random'})} />
      <Text text="brasil" color={randomColor({luminosity: 'dark', hue: 'random'})} />
    </React.Fragment>
  )
}