import React, { Component } from 'react'
import data from '../data/data.json'

class PhotoDetail extends Component {
  render() {
    console.log(
      'mi parameters: ' +
        this.props.match.params.id +
        this.props.match.params.type
    )
    console.log(data[this.props.match.params.type])
    console.log(Object.keys(data[this.props.match.params.type]))
    return (
      <div>
        <h3>
          {
            data[this.props.match.params.type].photos[
              this.props.match.params.id
            ].title
          }
        </h3>

        <img
          src={
            data[this.props.match.params.type].photos[
              this.props.match.params.id
            ].imageURL
          }
        />
      </div>
    )
  }
}

export default PhotoDetail
