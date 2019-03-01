import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <h1 className="title">
          <a href="/">Things I Like</a>
        </h1>
        <h2 className="subtitle">A Photo Gallery by Jason L Perry</h2>
      </div>
    )
  }
}

export default Header
