import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class PhotoList2 extends Component {
  render() {
    console.log('mi parameters: ' + this.props.match.params.id)
    console.log(data['miniatures'])
    console.log(Object.keys(data['miniatures']))
    return (
      <div>
        <h3>{data['miniatures'].title}</h3>
        <p>{data['miniatures'].description}</p>
        <ul>
          {data['miniatures'].photos.map((photo, i) => {
            return (
              <li key={i}>
                <Link to={`/miniatures/${i}`}>
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

export default PhotoList2
