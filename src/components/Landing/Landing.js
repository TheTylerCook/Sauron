import React, { Component } from 'react'
import './Landing.css'
import axios from 'axios'
import { getUserInfo } from './../../ducks/reducer'
import { connect } from 'react-redux'


 class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

componentDidMount() {
  this.props.getUserInfo();
}



  render() {
    const user = this.props.user;
    return (
      <div>
        <img className='avatar' src={user.img}/>
        <div className='user_name'>WELCOME {user.user_name}</div>
      
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUserInfo})(Landing);




  {/* { user ? <img className='avatar' src={user.img} /> : null }
                <p>Username: { user ? user.user_name : null }</p>
                <p>Email: { user ? user.email : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
*/}