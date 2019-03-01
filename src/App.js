import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from './components/CategoryList'
import PhotoList from './components/PhotoList'
import PhotoDetail from './components/PhotoDetail'
// import PhotoList2 from './components/PhotoList2'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:id" component={PhotoList} />
            <Route exact path="/:type/:id" component={PhotoDetail} />
            {/* <Route exact path="/miniatures/:id" component={PhotoDetail} /> */}

            {/* <Route exact path="/page1" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            
            <Route exact path="/villains/:id" component={VillainPage} />
            <Route component={ErrorPage404} /> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
