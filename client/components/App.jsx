import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Plates from './Plates'

const App = () => (
  <Router>
    <div className='app-container'>
      <div className="page-header">
        <h1 className="text-center">$0$ Hungry Avo</h1>
        <small>A visual presentaion of how expensive grocery is in NZ</small>
      </div>
      <Route exact path="/" component={Plates} />
    </div>
  </Router>
)

export default App
