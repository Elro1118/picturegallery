import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    console.log(data)
    console.log(Object.keys(data))
    return (
      <>
        <Header />
        <div className="main-section">
          <Menu url="http://things-i-like.surge.sh/" />
          <div className="pictures-section">
            {Object.keys(data).map(category => {
              return (
                <div className="Picture">
                  <Link to={`/${category}`}>
                    <h2>{data[category].title}</h2>
                  </Link>
                  <p>{data[category].description}</p>
                  <img src={data[category].photos[0].imageURL} />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default CategoryList
