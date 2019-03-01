import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <nav className="menu-section">
        <ul>
          <li>
            <a href={this.props.url}>🏠Home</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
