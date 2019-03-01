import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    console.log('mi parameters: ' + this.props.match.params.id)
    console.log(data['pandas'])
    console.log(Object.keys(data['pandas']))
    return (
      <div>
        <h3>{data['pandas'].title}</h3>
        <p>{data['pandas'].description}</p>
        <ul>
          {data['pandas'].photos.map((photo, i) => {
            return (
              <li key={i}>
                <Link to={`/pandas/${i}`}>
                  <img src={photo.imageURL} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PhotoList
