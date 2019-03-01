import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class PhotoDetail extends Component {
  render() {
    console.log('mi parameters: ' + this.props.match.params.id)
    console.log(data['pandas'])
    console.log(Object.keys(data['pandas']))
    return (
      <div>
        <h3>{data['pandas'].photos[0].title}</h3>

        <img src={data['pandas'].photos[0].imageURL} />
      </div>
    )
  }
}

export default PhotoDetail
