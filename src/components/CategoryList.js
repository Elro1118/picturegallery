import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
import { spawn } from 'child_process'

class CategoryList extends Component {
  render() {
    console.log(data)
    console.log(Object.keys(data))
    return (
      <>
        <div className="header-section">
          <h1 className="title">
            <a href="/">Things I Like</a>
          </h1>
          <h2 className="subtitle">A Photo Gallery by Jason L Perry</h2>
        </div>
        <div className="main-section">
          <nav className="menu-section">
            <ul>
              <li>
                <a href="http://things-i-like.surge.sh/">🏠Home</a>
              </li>
            </ul>
          </nav>
          <div className="pictures-section">
            <div>
              <ul className="pictures">
                {Object.keys(data).map(category => {
                  return (
                    <li>
                      <Link to={`/${category}`}>
                        <h3>{data[category].title}</h3>
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
