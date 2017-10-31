import React, { Component } from 'react'
import './Home.css'



export default class Home extends Component {







  render() {
    return (
      <div className='home_wrapper'>
          <div className='home_header'>
            <div className='home_logo'>Website Name</div>
            <a href={process.env.REACT_APP_LOGIN}>
            <button className='login_button'>Login</button></a>
          </div>
          <div className='home_body'></div>
          <div className='home_footer'></div>
      </div>
      
    )
  }
}
