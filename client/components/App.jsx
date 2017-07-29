import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Plates from './Plates'

const App = () => (
  <Router>
    <div className='app-container'>
      <div className="page-header">
        <h1 className="text-center"> 😭 Food in NZ is so expensive 😭</h1>
        <small id="sub-header">A visual presentaion of how much grocery you can buy with 2 hours of minimum wage</small>
      </div>
      <Route exact path="/" component={Plates} />
    </div>
  </Router>
)

export default App
