import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    console.log('mi parameters: ' + this.props.match.params.id)
    console.log(data[this.props.match.params.id])
    console.log(Object.keys(data[this.props.match.params.id]))
    return (
      <div>
        <h3>{data[this.props.match.params.id].title}</h3>
        <p>{data[this.props.match.params.id].description}</p>
        <ul>
          {data[this.props.match.params.id].photos.map((photo, i) => {
            return (
              <li key={i}>
                <Link to={`/${this.props.match.params.id}/${i}`}>
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
