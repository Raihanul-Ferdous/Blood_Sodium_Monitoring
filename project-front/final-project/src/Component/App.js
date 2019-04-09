import React, { Component } from 'react';
import Login from './Login/Login'
import Register from './Register/Register'
import Home from './Home/Home'
import Result from './Result/Result'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Login: true,
      Home: null,
      User_id: null,
      Result: false,
      Register: false
    }
  }

  registerPageHandler = ()=>{
    this.setState({
      Login: false,
      Home: null,
      User_id: null,
        Result: false,
      Register: true
    })
  }
  homePageView = (data) =>{
    this.setState({
      Login: false,
      Home: data.name,
      User_id: data.user_id,
      Result: false,
      Register: false
    })
    console.log("hudai.........2")
    console.log(this.state)
  }
  resultViewPage = (data) =>{
    this.setState({
      Login: false,
      Home: data.name,
      User_id: data.user_id,
      Result: true,
      Register: false
    })

  }
  loginPageHandler=()=>{

    this.setState({
      Login: true,
      Home: null,
      User_id: null,
      Result: false,
      Register: false
    })
console.log("hudai.........")
  }
  render() {
    let output = null;
    if(this.state.Login){
      output = (
        <Login
        registerClickHandler = {this.registerPageHandler.bind(this)}
        homePageHandle ={this.homePageView.bind(this)}
        />
      )
    }
    else if(this.state.Register){
      output = (
        <Register
        loginHandle = {this.loginPageHandler.bind(this)}
        />
      )
    }
    else if(this.state.Result){
       console.log("bal...result")
      output = (
        <Result
        user_id = {this.state.User_id}/>
      )
    }
    else if(this.state.Home!=null && this.state.User_id){
      output = (
        <Home
        name = {this.state.Home}
        user_id = {this.state.User_id}
        resultViewHandler = {this.resultViewPage.bind(this)}
        />
      )
    }
    return (
      <div className="App">
        {output}
      </div>
    );
  }
}

export default App;
