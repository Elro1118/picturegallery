import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    console.log(data)
    console.log(Object.keys(data))
    return (
      <>
        <div className="header-section">
          <h1 className="title">Things I Like</h1>
          <h2 className="subtitle">A Photo Gallery by Jason L Perry</h2>
        </div>
        <div>
          <nav>
            <ul>
              <li>Home</li>
            </ul>
          </nav>
          <div>
            <div>
              <ul>
                {Object.keys(data).map(category => {
                  return (
                    <li>
                      <Link to={`/${category}`}>
                        <h3>{category}</h3>
                      </Link>
                      <p>{data[category].description}</p>
                      <img src={data[category].photos[0].imageURL} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CategoryList
