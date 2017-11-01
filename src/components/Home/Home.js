import React, { Component } from 'react'
import './Home.css'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Home extends Component {


  

  render() {
    return (
      <MuiThemeProvider>
      <div className='home_wrapper'>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className='home_header'>
          <div className='home_logo'>Website Name</div>
          <a href={process.env.REACT_APP_LOGIN}>
            <button className='login_button'>Login</button></a>
        </div>
        <div className='home_body'></div>
        <div className='home_footer'></div>
        <div class="video-background">
          <div class="video-foreground">
            {/* <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zILpSTIy6Fw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div id="vidtop-content">
          <div class="vid-info">
            <h1></h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
            <a href="/auth">SINUP</a>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
